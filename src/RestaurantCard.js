import React, { Component } from "react";
import axios from 'axios';


let apiKey = 'TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx'

class RestaurantCard extends Component {

  constructor(props, apiKey){
    super(props);
    this.state = {
        yelpData: [],
        lat:0.6548665,
        long:-0.30814780000001,
    }; 
  }

    yelpCall = (event) => {
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?latitude=${this.state.lat}&longitude=${this.state.long}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
            params: {
                categories: 'breakfast_brunch',
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log ('error')
        })
    }

  //  getLocation() {
  //   if (navigator.geolocation != undefined) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log(this)
  //       //this.setState({lat:position.coords.latitude, long:position.coords.longitude});
  //     });
  //   } 
  // }

  render() {
    //render the data items (e.g., as a list)
    if (navigator.geolocation != undefined) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({lat:position.coords.latitude, long:position.coords.longitude});
        console.log(this.state.lat)
      });
    } 
    return <div><button onClick={this.yelpCall}>Test</button></div>; 
  }
  
}
export default RestaurantCard;