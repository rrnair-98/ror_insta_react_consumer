import React from 'react'
import { Route, Switch} from "react-router-dom";
import Home from './Home.js'
import Users from './Users.js'
import Posts from './Posts.js'
import UserPost from './UserPost'

class App extends React.Component{
    render(){

        return(
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/user/:id/posts/" component={UserPost}/>
                    <Route exact path="/users" component={Users}/>
                    <Route exact path="/posts" component={Posts}/>
                </Switch>
            </div>
        )
    }
}

export default App;