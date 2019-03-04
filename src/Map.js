import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const TEST_YELP = {
    "rating": 4,
    "price": "$$",
    "hours": [
        {
        "hours_type": "REGULAR",
        "open": [
            {
            "is_overnight": false,
            "end": "2300",
            "day": 0,
            "start": "1000"
            },
            {
            "is_overnight": false,
            "end": "2300",
            "day": 1,
            "start": "1000"
            },
            {
            "is_overnight": false,
            "end": "2300",
            "day": 2,
            "start": "1000"
            },
            {
            "is_overnight": false,
            "end": "2300",
            "day": 3,
            "start": "1000"
            },
            {
            "is_overnight": false,
            "end": "0000",
            "day": 4,
            "start": "1000"
            },
            {
            "is_overnight": false,
            "end": "0000",
            "day": 5,
            "start": "1000"
            },
            {
            "is_overnight": false,
            "end": "2300",
            "day": 6,
            "start": "1000"
            }
        ],
        "is_open_now": true
        }
    ],
    "photos": [
        "http://s3-media4.fl.yelpcdn.com/bphoto/howYvOKNPXU9A5KUahEXLA/o.jpg",
        "http://s3-media3.fl.yelpcdn.com/bphoto/I-CX8nioj3_ybAAYmhZcYg/o.jpg",
        "http://s3-media2.fl.yelpcdn.com/bphoto/uaSNfzJUiFDzMeSCwTcs-A/o.jpg"
    ],
    "id": "north-india-restaurant-san-francisco",
    "categories": [
        {
        "alias": "indpak",
        "title": "Indian"
        }
    ],
    "review_count": 551,
    "name": "North India Restaurant",
    "url": "https://www.yelp.com/biz/north-india-restaurant-san-francisco",
    "coordinates": {
        "latitude": 37.787789124691,
        "longitude": -122.399305736113
    },
    "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/howYvOKNPXU9A5KUahEXLA/o.jpg",
    "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "123 Second St",
        "zip_code": ""
    }
}

export default class l extends Component {
    render() {
        return (
            <div id='map'>
                <Map 
                    style={{height: '100vh'}}
                    center={[51.505, -0.09]}
                    zoom={13}>
                        <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // attribution=";http://osm.org/copyright&quot;>OpenStreetMap"
                        />
                    <MyMarker />
                </Map>
            </div>
        )
    }
}

class MyMarker extends Component {
    render() {
        let lat  = this.props.coordinates.latitude;
        let lon = this.props.coordinates.longitude;
        return (<Marker position={[lat, lon]}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>)
    }
}