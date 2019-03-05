import React, { Component } from 'react';
import NavbarPage from './NavbarPage'
import Map from './Map'
import RestaurantCard from './RestaurantCard';
import axios from 'axios';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            navValue:"",
            businesses : [],
            lat: 37.787789124691,
            long:-122.399305736113,
        }; 
        if (navigator.geolocation !== undefined) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({lat:position.coords.latitude, long:position.coords.longitude});
                this.yelpCall();
            }); 
        }
        
    }
 
    changeState = (event) => {
        this.setState({
            navValue : event
        }, () => {
            this.generalYelpCall(this.state.navValue)
        })
    }

    yelpCall = () => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${this.state.lat}&longitude=${this.state.long}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((res) => {
            this.setState({
                businesses: res.data.businesses
            })
        })
        .catch((err) => {
            console.log ('error')
        })
    } 

    generalYelpCall = (arg) => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${arg}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((res) => {
            this.setState({
                businesses: res.data.businesses,
                lat: res.data.region.center.latitude,
                long: res.data.region.center.longitude
            })
        })
        .catch((err) => {
            console.log ('error')
        })
    } 


    render() {
        return (
        <div id="container">
            <NavbarPage func={this.changeState}/>
            <Map navBarValue={this.state.navValue} id="contain" lat={this.state.lat} long={this.state.long} businesses={this.state.businesses}/>
            <RestaurantCard />
        </div>
        )
    }
}

let locationSearched = "seattle";
let apiKey = "TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx";