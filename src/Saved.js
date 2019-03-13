import { Component } from "react";
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import RestaurantCard from './RestaurantCard';

export default class Saved extends Component {

    render() {
        let content;
            content = this.props.saved.map((business) => {
                return <RestaurantCard business={business}></RestaurantCard>;
            });

        }


        return (
            {content}
            );
    }

}