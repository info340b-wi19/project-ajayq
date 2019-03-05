import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { uptime } from 'os';

let apiKey = 'TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx'

export default class l extends Component {
    render() {
        console.log(this.props.lat)
        return (
            <div id='map'>
                <Map 
                    style={{height: '100vh'}}
                    center={[this.props.lat, this.props.long]}
                    zoom={14.5}>
                        <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // attribution=";http://osm.org/copyright&quot;>OpenStreetMap"
                        />
                    <AllMarkers businessList={this.props.businesses}/>
                </Map>
            </div>
        )
    }
}

class MyMarker extends Component {
    
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