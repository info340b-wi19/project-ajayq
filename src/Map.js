import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet'
import  RestaurantCard  from './RestaurantCard'
import MyMarker from './MyMarker'

// Creates a Map of businesses represented through markers
// Expects a set of businesses
// Expects the latitude and longitude that the map should currently show.
export default class MyMap extends Component {

    // The state of the map, includes which restaurant card is being shown 
    // and if there is a card being shown.
    constructor(props) {
        super(props);
        this.state = {
            doesShowCard:false,
            business:[]
        }
    }

    // Changes the state of the map to show the card that was selected. 
    // This function is passed to each of the markers.
    childSelected = (doesShowCard, business) => {
        this.setState({
            doesShowCard: doesShowCard,
            business: business
        })
    }

    // A function which is passed to the cards so that they can change the
    // hidden state of the map's main card.
    hideCard = () => {
        this.setState({
            doesShowCard:false
        })
        console.log("test")
    }

    render() {
        return (
            <div >
                <Map id='map'
                    style={{height: '100vh'}}
                    center={[this.props.lat, this.props.long]}
                    zoom={14.5}>
                        <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {this.props.businesses.map((business) => {
                        return <MyMarker key={business.name} business={business} childSelected={this.childSelected}/>
                    })}
                </Map>
                {this.state.doesShow ? <RestaurantCard business={this.state.business} hideCard={this.hideCard}/>: null}
            </div>
        )
    }
}
