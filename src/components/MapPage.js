import React, { Component } from 'react';
import Map from './Map'
import axios from 'axios';
import { MDBAlert } from 'mdbreact';
import MapNavbar from './MapNavbar';

export default class MapPage extends Component {

    // On construction it requests for the users location and then finds businesses with the yelp api
    constructor(props) {
        super(props);
        this.state = {
            navValue: "",
            businesses: [],
            lat: 37.787789124691,
            long:-122.399305736113,
            alertMessage:"",
            term: "",
            price: "",
            distance: 10000,
            limit:20,
            email: '',
            password: '',
            username: '',
            user: null,
            isLoading : true
        }; 

        if (navigator.geolocation !== undefined) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({ 
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    isLoading:true 
                }, () => {
                    this.yelpCallWithCoordinates();
                });
            });
        }

    }

    // A function we pass down to the navbar, then the search bar to update our state
    // after the new state has been set, a call to the yelp api is made using the newly updated state
    changeState = (passedNavValue) => {
        this.setState({
            navValue: passedNavValue,
            isLoading: true
        }, () => {
            this.yelpCallWithLocation()
        })
    }

    //Sets the state with the user input 
    handleSelect = (evt) => {
        evt.preventDefault();
        let selectName = evt.target.name;
        let selectedValue = evt.target.value;
        this.setState({ [selectName]: selectedValue, isLoading:true }, () => {
            this.yelpCallWithCoordinates();
        })
    }


    handleCheckBoxChange = (event) => {
        let oldPrice = this.state.price === "" ? [] : this.state.price.split(",");
        if (oldPrice.includes(event.target.value)) {
            let index = oldPrice.indexOf(event.target.value);
            oldPrice.splice(index,1);
        } else {
            oldPrice.push(event.target.value);
        }
        this.setState({ price : oldPrice.toString(), isLoading: true }, () => {
            this.yelpCallWithCoordinates();
        })
    }

    // Preforms a yelp api fetch, look at the other yelp call for our reasoning on the different fetch
    // sets the state of the businesses within the location.
    // uses the current state's latitude and longitude.
    yelpCallWithCoordinates = () => {

        let url = `https://api.yelp.com/v3/businesses/search?` +
        `latitude=${this.state.lat}` +
        `&longitude=${this.state.long}` +
        `${this.state.term !== "" ? "&term=" + this.state.term : ""}` +
        `${this.state.price !== "" ? "&price=" + this.state.price : ""}` +
        `&radius=${this.state.distance}&limit=${this.state.limit}`;
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}`+url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((res) => {
            this.setState({
                businesses: res.data.businesses,
                isLoading: false
            })
        })
        .catch((err) => {
            this.setState({
                isLoading: false,
                alertMessage: "Connection error, check your internet connection."
            })
        })
    }

    // this function preforms fetches a response to yelp's api
    // We ran into a cors error and found this solution online... 
    // not best practice... especially sending private keys through another site
    // this function updates the state and takes in a location argument which was originally from the navbar
    // updates the latitude and longitude based on the yelp api response
    yelpCallWithLocation = () => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${this.state.navValue}
        ${this.state.term === "" ? "" : "&term="+ this.state.term}
        ${this.state.price !== "" ? "&price=" + this.state.price : ""}
        &radius=${this.state.distance}&limit=${this.state.limit}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((res) => {
            this.setState({
                businesses: res.data.businesses,
                lat: res.data.region.center.latitude,
                long: res.data.region.center.longitude,
                isLoading: false
            }, () => {
            })
        })
        .catch((err) => {
            this.setState({
                isLoading: false,
                alertMessage: "Connection error, check your internet connection."
            })
        })
    
}

    // Removes the alert by setting the alert message to nothing
    dismissAlert() {
        this.setState({
            alertMessage: ""
        })
    }

    
    render() {
        let error = this.state.alertMessage !== "" ? 
            <div onClick={() => {this.dismissAlert()}}>
                <MDBAlert color="danger" dismiss>
                    {this.state.alertMessage}
                </MDBAlert>
            </div>
            : null
        let loading = this.state.isLoading ? 
            <div className="spinner-border centered-absolute text-primary" role="status" id="spinner">
                <span className="sr-only">Loading...</span>
            </div>
            : null
        let loweredOpacity = this.state.isLoading ? "lower-opacity" : ""
        return (
            <div id="container" >
                {loading}
                <div className={loweredOpacity}>
                    <MapNavbar func={this.changeState} handleSelect={this.handleSelect} handleCheckBoxChange={this.handleCheckBoxChange}/>
                    {error}
                    <Map navBarValue={this.state.navValue} id="contain" lat={this.state.lat} long={this.state.long} businesses={this.state.businesses} />
                    <footer role="contentinfo">© 2018 Copyright: Quickstops</footer>
                </div>
            </div>
        )
    }
}

// Bad practice, but if we are hosting this project without a backend to do the calls, we will run into this
// issue anyways.
let apiKey = "TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx";