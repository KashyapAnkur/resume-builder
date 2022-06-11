import React from 'react'
import Homepage from './Views/Homepage';
import Header from './Views/Header';
import { Login } from './Views/Login';
import { Register } from './Views/Register';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoutes';
import ForgotPassword from './Views/ForgotPassword';
import ResetPassword from './Views/ResetPassword';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Container fluid>
          <Header />
          <div className="main">
            <Route strict exact path="/" component={Homepage} />
            <Route strict exact path="/login" component={Login} />
            <Route strict exact path="/register" component={Register} />
            <Route strict exact path="/forgotpassword" component={ForgotPassword} />
            <Route strict exact path="/resetpassword" component={ResetPassword} />
          </div>
        </Container>
      </Switch>
    </BrowserRouter>
  )
}

export default App;