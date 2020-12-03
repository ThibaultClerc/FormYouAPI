import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '../store/store'

import AdminRoute from '../components/PrivateRoute'
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'


const App = () => {
    return ( 
        <Provider store={store}>
            <Navbar/>
            <Switch> 
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </Provider>
    )
}

export default App
