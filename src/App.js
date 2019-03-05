import React, { Component } from 'react';
import NavbarPage from './NavbarPage'
import Map from './Map'
import RestaurantCard from './RestaurantCard';

export default class App extends Component {
    render() {
        return (
        <div id="container">
            <NavbarPage />
            <Map id="contain"/>
            <RestaurantCard />
        </div>
        )
    }
}

let locationSearched = "seattle";
let apiKey = "TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx";