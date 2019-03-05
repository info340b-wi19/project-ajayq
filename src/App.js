import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';

const config = {
  headers: {'Authorization': 'Bearer API key'},
  params: {
    term: 'tacos',
    location: 'main 123st'
  }
};

let locationSearched = "seattle";
let apiKey = "TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx";

export default class App extends Component {
  
  render(){
    return (
        <RestaurantCard />      
    );
  }
}