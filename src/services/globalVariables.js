var localGlobalConstants = {
    AUTH_URL: "https://esuitehqv2.westus.cloudapp.azure.com:91/api/",
    DATA_URL: "https://esuitehqv2.westus.cloudapp.azure.com:92/api/",
    BASE_MESSAGE: "Local",
  };

  var config = localGlobalConstants;
  if (process.env.REACT_APP_ENV === "staging") {
    config = stagingGlobalConstants;
  } else if (process.env.REACT_APP_ENV === "qa") {
    config = testingGlobalConstants;
  }
  
  export const globalConstants = {
    // Add common config values here
  
    VERSION: "1.0.0",
    ...config,
  };  