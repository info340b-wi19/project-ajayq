import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import Saved from './Saved.js';


// import App from './App'
import { Route, Switch} from 'react-router-dom'
import App from './App';
import SignUp from './Signup';
import AboutSection from './AboutSection';

export default class About extends Component {
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
                    <Route exact path='/find' component= {App} />
                    <Route exact path='/saved' component={Saved} />
                    <Route exact path= '/About' component={AboutSection} />
                </Switch>
            </div>
        )
    }
}

class SignUpForm extends Component{
    render(){
        return (
            <div>
            <SignUp />
           
            </div>
        )
    }
}



