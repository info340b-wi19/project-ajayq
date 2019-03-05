import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { uptime } from 'os';
import axios from 'axios';

let apiKey = 'TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx'

export default class l extends Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses : [],
            lat: 37.787789124691,
            long:-122.399305736113,
        }
        if (navigator.geolocation != undefined) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({lat:position.coords.latitude, long:position.coords.longitude});
                this.yelpCall();
            }); 
        }
    }

    yelpCall = (event) => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${this.state.lat}&longitude=${this.state.long}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((res) => {
            console.log("yelp call");
            this.setState({
                businesses: res.data.businesses
            })
        })
        .catch((err) => {
            console.log ('error')
        })
    } 


    render() {
        return (
            <div id='map'>
                <Map 
                    style={{height: '100vh'}}
                    center={[this.state.lat, this.state.long]}
                    zoom={15}>
                        <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // attribution=";http://osm.org/copyright&quot;>OpenStreetMap"
                        />
                    <AllMarkers businessList={this.state.businesses}/>
                </Map>
            </div>
        )
    }
}

class MyMarker extends Component {
    constructor(props) {
        super(props);
        // map state to props
    }
    
    handleClick= (event) => {
        // this is where we will show the restaurant card
        let business = this.props.business;
        console.log(business.name);
        // set state here in order to change the look of the card popup
    }

    handleHover = (event) => {
        let business = this.props.business;
        event.target.bindPopup(
            business.name
        );
        event.target.on('mouseover', function (e) {
            event.target.openPopup();
        });
        event.target.on('mouseout', function (e) {
            event.target.closePopup();
        });
    }

    render() {
        
        let business = this.props.business;
        let lat  = this.props.business.coordinates.latitude;
        let lon = this.props.business.coordinates.longitude;
        let mark = <Marker position={[lat, lon]} onClick={this.handleClick} onMouseover={this.handleHover}>
        </Marker>;
        return (mark)
    }
}

class AllMarkers extends Component {
    render() {
        let businessList = this.props.businessList;
        let businessMarkers = businessList.map((business) =>{
            return <MyMarker key={business.name} business={business}/>
        });
        return(businessMarkers);
    }
}