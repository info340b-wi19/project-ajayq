import React, { Component } from 'react';
import kathy from './img/kathy.jpg'
import ajay from './img/ajay.jpg'
import jv from './img/jv.jpg'
import matthew from './img/matthew.jpg'
import Navigation from './Navigation.js';
import './about.css'
import 'firebase/auth';

export default class AboutSection extends Component {
    render() {
        return (
            <div>
            <Navigation />
        
        <div className="container">
        <div className="about">
        <h1>About</h1>
        <p>QuickStops is powered by the Yelp Fusion API, allowing us to bring you comprehensive information and
            reviews on millions of businesses across 32 countries. The information available includes...</p>
        <ul>
            <li>Ratings</li>
            <li>Location</li>
            <li>Price range</li>
        </ul>
            <p>We understand that sometimes finding a place to go can be an overwhelming experience.
            This web application in this space is in response to the lack of crowd sourced review sites with simplistic user interface elements. </p>
        </div>
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
                  <div className="usage">
                   <h1>Usage</h1>
                   <p>QuickStops allows users to discover businesses from the Find page in a variety of ways once they create an account!</p>
                   <ul>
                       <li>Search for businesses by location</li>
                       <li>Toggle results by your desired price range</li>
                       <li>Constrain the results by specifying the distance you wish to travel</li>
                       <li>Filter the results by category of businesses (Brewery, Restaurant)</li>
                   </ul>
                   <p>Once logged in, the user can save businesses that catch their eye to quickly access later. To see the list of saved businesses, users can access
                       them from the favorites button on the homepage or the saved tab on the Find page.
                   </p>
                   </div>
               </div>
               </div>
        )
    }
}