import React, { Component, Fragment } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Homepage from '../../components/Homepage/Homepage'
import Signin from '../../components/auth/Signin'
import Signup from '../../components/auth/Signup'
import HomepageProfile from '../../components/account/settings/Homepage'
import CreatePosts from '../../components/Posts/CreatePosts'
import _404_ from './_404_'
import Navbar from '../../components/navbar/Navbar'
import Home from '../../components/Homepage/Home'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path='/signin' component={Signin}/>
                    <Route path='/signup' component={Signup}/>
                    <Route exact path='/' component={Homepage}/>
                    <Route 
                        path='/(.+)'
                        render={()=>(
                            <Fragment>
                                <Navbar/>
                                <Switch>
                                    <Route path='/home' component={Home}/>
                                    <Route path='/profiles' component={HomepageProfile}/>
                                    <Route path='/create' component={CreatePosts}/>
                                </Switch>
                            </Fragment>
                        )}
                    />
                    <Route component={_404_}/>
                </Switch>
            </Fragment>
        )
    }
}

export default withRouter(App)