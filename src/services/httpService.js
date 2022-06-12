import axios from "axios";
import jwt_decode from "jwt-decode";
import moment from "moment";
import { globalConstants } from "./globalVariables";
import { updateToken } from "./updateToken";

const AUTH_URL = globalConstants.AUTH_URL;
const DATA_URL = globalConstants.DATA_URL;

const AUTH_INSTANCE = axios.create({
  baseURL: AUTH_URL,
});
const DATA_INSTANCE = axios.create({
  baseURL: DATA_URL,
});

const handleTokenAuthentication = async (config) => {
  var authToken = localStorage.getItem("token");
  var refreshToken = localStorage.getItem("refreshToken");
  if (authToken) {
    let decoded = jwt_decode(authToken);
    var d = moment(new Date()).format("MM-DD-YYYY h:mm:ss");

    var expireDate = decoded.exp;
    expireDate = moment(new Date(0).setUTCSeconds(expireDate)).format(
      "MM-DD-YYYY h:mm:ss"
    );

    var dur = moment(expireDate).diff(moment(d), "minutes");

    if (dur <= 1 && refreshToken !== "yes") {
      authToken = await updateToken();
    }
    config.headers.authorization = "bearer " + authToken;
  }
  return config;
};
const handleUnauthorized = async (status) => {
  let token = await localStorage.getItem("token");
  if (token && status === 401) { // works when token is expired but still exists in localStorage
    localStorage.setItem("lastRoute", window.location.pathname);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
  } else if(status === 401) { // works when logged in with same user on different browsers and logouts from one.
    localStorage.setItem("lastRoute", window.location.pathname);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.href = "/";
  }
};

const ApplyInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    async (config) => {
      return handleTokenAuthentication(config);
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(null, (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 501;

    if (!expectedError) {
    }
    handleUnauthorized(error.response.status);

    return Promise.reject(error);
  });
};
ApplyInterceptor(AUTH_INSTANCE);
ApplyInterceptor(DATA_INSTANCE);

const methods = {
  AuthAPI: AUTH_INSTANCE,
  ...DATA_INSTANCE,
};

export default methods;
