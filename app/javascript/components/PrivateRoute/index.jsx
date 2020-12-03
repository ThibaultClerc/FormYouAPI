import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { isAdmin } from '../../utils/usertype'

  const AdminRoute = ({component: Component, ...rest}) => {

    const user = useSelector(state => state.user);

    const isLogin = () => {
      if (isAdmin(user)) {
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

export default AdminRoute
