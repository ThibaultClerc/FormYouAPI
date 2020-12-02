import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Signup from './Signup'

const App = () => {
    return (
                    
    <div>
        <Navbar/>
        <Switch> 
            <Route exact path="/" component={Home}/>
            <Route exact path="/signup" component={Signup}/>
            {/* <Route exact path="/login" component={Login}></Route> */}
        </Switch>
        
    </div>
    )
}

export default App
