import React, { Component } from 'react';
import kathy from './img/kathy.jpg'
import ajay from './img/ajay.jpg'
import jv from './img/jv.jpg'
import matthew from './img/matthew.jpg'
import Navigation from './Navigation.js';
import './about.css'
import 'firebase/auth';


// import App from './App'
import { Route, Switch, NavLink } from 'react-router-dom'
import App from './App';
import SignUp from './Signup';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export default class AboutSection extends Component {
    render() {
        return (
            <div>
            <Navigation />
        
        <div className="container">
                  <h1>Meet Our Team</h1>
                  <div className="flex-container">
                      <div className="card id-card">
                          <img className="card-img-top cardImg" src={kathy} alt="Kathy" />
                          <div className="card-body">
                              <h2 className="card-title">Kathy Tran</h2>
                              <p className="card-text">
                                  Kathy is a sophomore Informatics student at the University of Washington. She is from Olympia, WA and
                                  enjoys watching Brooklyn Nine-Nine and take her dog to the park.
                              </p>
                          </div>
                      </div>

                      <div className="card id-card">
                          <img className="card-img-top cardImg" src={jv} alt="JV" />
                          <div className="card-body">
                              <h2 className="card-title">JV Yeom</h2>
                              <p className="card-text">
                                  JV is a junior Informatics student at the University of Washington. She is from Olympia, WA and her favorite
                                   park in Seattle is Gas Works Park!
                                  </p>
                          </div>
                      </div>

                      <div className="card id-card">
                          <img className="card-img-top cardImg" src={ajay} alt="Ajay" />
                          <div className="card-body">
                              <h2 className="card-title">Ajay Qi</h2>
                              <p className="card-text">
                                  Ajay is a junior Informatics student at the University of Washington. His hometown is Cincinnati, Ohio and does
                                  caligraphy on the side.
                                  </p>
                          </div>
                      </div>

                      <div className="card id-card">
                          <img className="card-img-top cardImg" src={matthew} alt="Matthew" />
                          <div className="card-body">
                              <h2 className="card-title">Matthew Vogt</h2>
                              <p className="card-text">
                                  Matthew is a junior Informatics student at the University of Washington. He is from Woodinville, WA and skydives on
                                  Tuesday afternoons.
                                  </p>
                          </div>
                      </div> 
                  </div> 
               </div>
               </div>
        )
    }
}