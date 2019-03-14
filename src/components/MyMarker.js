import React, { Component } from 'react';
import  {Marker} from 'react-leaflet'

//This class represents each Marker on the map.
//Expects a function to show this specific marker
//Expects the business that this marker represents.
export default class MyMarker extends Component {
    
    // Handles click event listenener of each marker.
    // Uses the childSelected function that it's passed to return the clicked businesses information
    handleClick= () => {        
        let business = this.props.business;
        this.props.childSelected(true, business)
    }

    // When a marker is hovered over, this marker should show a popup.
    // The popup contains the business's name, it's rating, price range, and an image.
    handleHover = (event) => {
        let business = this.props.business;
        event.target.bindPopup( 
            "<div id=\"flex\">" +
                "<div>" +
                    "<h4>" + business.name + "</h4> <br>" +
                    "<h5>Rating: " + business.rating + " Price: " + business.price + "</h5>"
                + "</div>"
                + "<img src=\"" + business.image_url + "\"height=\"100\"\"width=\"100\" alt=\""+ business.name +"\">"
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