import React, { Component } from 'react';
import 'firebase/auth';
import Saved from './components/Saved.js';


// import App from './App'
import { Route, Switch} from 'react-router-dom'
import MapPage from './components/MapPage';
import SignUp from './components/Signup';
import AboutSection from './components/AboutSection';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
             
        };

    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={SignUp} />
                    <Route exact path='/find' component= {MapPage} />
                    <Route exact path='/saved' component={Saved} />
                    <Route exact path= '/About' component={AboutSection} />
                </Switch>
            </div>
        )
    }
}



