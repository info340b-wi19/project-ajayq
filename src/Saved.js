import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import RestaurantCard from './RestaurantCard';

export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: null,
        }

        this.changeState = this.changeState.bind(this);
    }

    changeState= (data) => {
        this.setState({favSchools: data})
    }

    render() {
        let renderThis;
        this.unAuthSubFunction = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref(user.uid).on('value', (snapshot) => {
                    let values = snapshot.val();
                    let favorites = null;
                    if (values != null) {
                        favorites = (Object.keys(values).map(key => {
                            return key;
                        }));
                    }
                    this.changeState(favorites);
                });
            }
        })
        // console.log(this.state.favorites);
        return(
            <h1>Hi</h1>
        )
    }
}