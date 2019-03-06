import React, { Component } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet'
import  RestaurantCard  from './RestaurantCard'


export default class l extends Component {

    constructor(props) {
        super(props);
        this.state = {
            doesShow:false,
            business:[]
        }
    }

    childSelected = (doesShow, business) => {
        this.setState({
            doesShow : doesShow,
            business: business
        })
    }

    hideCard = () => {
        this.setState({
            doesShow:false
        })
        console.log("test")
    }


    render() {
        console.log(this.props.lat)
        return (
            <div >
                <Map id='map'
                    style={{height: '100vh'}}
                    center={[this.props.lat, this.props.long]}
                    zoom={14.5}>
                        <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // attribution=";http://osm.org/copyright&quot;>OpenStreetMap"
                        />
                    <AllMarkers childSelected={this.childSelected} businessList={this.props.businesses} />
                </Map>
            {this.state.doesShow ? <RestaurantCard business={this.state.business} hideCard={this.hideCard}/>: null}
            </div>
        )
    }
}

class MyMarker extends Component {
    
    // Handle click event listenener of each marker.
    // Uses the childSelected function that it's passed to return the clicked businesses information
    handleClick= (event) => {        
        let business = this.props.business;
        this.props.childSelected(true, business)
        // set state here in order to change the look of the card popup
    }

    handleHover = (event) => {
        let business = this.props.business;
        event.target.bindPopup( 
            "<div id=\"flex\">" +
                "<div>" +
                    "<h4>" + business.name + "</h4>" + "<br>" +
                    "<h5>Rating: " + business.rating + " Price: " + business.price + "</h5>"
                + "</div>"
                + "<img src=\"" + business.image_url + "\"height=\"100\"" + "\"width=\"100\">"
            + "</div>"
        );
        event.target.on('mouseover', function (e) {
            event.target.openPopup();
        });
        event.target.on('mouseout', function (e) {
            event.target.closePopup();
        });
    }

    render() {
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
            return <MyMarker key={business.name} business={business} childSelected={this.props.childSelected}/>
        });
        return(businessMarkers);
    }
}
