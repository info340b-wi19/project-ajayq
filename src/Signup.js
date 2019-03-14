import React, { Component } from 'react';
import firebase from 'firebase/app';
import { NavLink } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import foodMain from './img/foodtable.jpg'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Navigation from './Navigation.js';
import './about.css';
export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = { user: null,
    display: '' }
  }

  uiConfig = {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    signInFlow: 'popup',
  };

  componentDidMount() {
    //when I signed in or signed out
    this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) { //if exists, then we logged in
        console.log("Logged in as", firebaseUser.email);
        this.setState({ user: firebaseUser })
      } else {
        console.log("Logged out");
        this.setState({ user: null })
      }
    })
  }

  componentWillUnmount() {
    this.authUnSubFunction();
  }

  render() {
    let content = null;
    if (!this.state.user) { //signed out
      content = (
        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
      )
    }
    else { 
      let name = this.state.user.displayName;
      content = (
    
      <div>
          
        {/* <h1>Welcome {this.state.user.displayName}</h1> */}
        <AboutPage  name = {name}/>
        </div>
      )
    }

    return (
      <div>
        
        {this.state.errorMessage &&
          <p className="alert alert-danger">{this.state.errorMessage}</p>
        }
        {content}
      </div>
    )
  }
}

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="box">
          <Image id='main-photo' alt="Cups of Beers Being Served" src={foodMain} fluid />
          <div className="centered">
            <h1>Welcome Back: {this.props.name} </h1> 
            <p>Find your next adventure!</p>
          </div>
          <NavLink to='/find'>
            <button className='btn btn-warning explore'>Explore Now! </button>
          </NavLink>

          <NavLink to='/saved'>
            <button className='btn btn-warning fav'>Favorites!</button>
          </NavLink>

        </div>


        <div className="flex-container WWW">
          <div className="flex-container">
            <div className="flex-item">
              <p className="flex-title">WHO</p>
              <p>
                You are an inspiring foodie or someone looking for a quick bite to eat. Our easy-to-use search and save function
                will help anyone find their next go-to spot.
                          </p>
            </div>
          </div>
          <div className="flex-container">
            <div className="flex-item">
              <p className="flex-title">WHAT</p>
              <p> Whether you are finding restaurants close by to eat or browsing through
                  businesses 7 states away, we believe in no-frills features that will get the job done.
                  Search by location and tailor it with filters, your results will be shown on our contemporary
                  map. Start building your food bucket list.
                          </p>
            </div>
          </div>
          <div className="flex-container">
            <div className="flex-item">
              <p className="flex-title">WHY</p>
              <p>We are Mari-Kondo-ing crowd sourced review sites. By approaching our design with a minimalistic fashion,
                  we've narrowed the information down to only the essential details.
                          </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}