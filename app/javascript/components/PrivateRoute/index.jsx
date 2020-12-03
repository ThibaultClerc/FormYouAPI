import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

  const PrivateRoute = ({component: Component, ...rest}) => {

    const user = useSelector(state => state.user);

    const isLogin = () => {
      if (!Array.isArray(user) && user.is_validated) {
        return true
      } else {
        return false
      }
    }

    return (
      <Route {...rest} render={props => (
          isLogin() ?
              <Component {...props} />
          : <Redirect to="/login" />
      )} />
    );
};

export default PrivateRoute
