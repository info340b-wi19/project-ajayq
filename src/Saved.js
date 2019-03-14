import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse,
} from "mdbreact";
import MainNavbar from './components/MainNavbar'
import axios from 'axios';


export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favBusinesses: null,
            isLoading: true,
            addAlert: false
        }

        this.changeState = this.changeState.bind(this);
    }

    //Once the businessID's have been fetched, fetch other information
    changeState(data) {
        this.setState({favBusinesses: data}, () => {
            this.state.favBusinesses.map((businessID) => {
                this.fetchRestaurantData(businessID);
            })
        })
    }


    fetchRestaurantData = (businessID) => {
        let url = `https://api.yelp.com/v3/businesses/${businessID}`;
        console.log(url)
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}`+url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                addAlert: true
            })
        })
    }

    componentDidMount() {
        this.unAuthSubFunction = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref(user.uid).on('value', (snapshot) => {
                    let values = snapshot.val();
                    let favorites = null;
                    if (values != null) {
                        favorites = (Object.keys(values).map((key) => {
                            return key;
                        }));
                    }
                    this.changeState(favorites);
                });
            }
        })
    }



    render() {
        console.log(this.state.favBusinesses)        
        return(
            <MainNavbar />
        )
    }
}


class RestaurantCardExtended extends Component {  
    saveToFirebase = (event) => {
        event.preventDefault();
        let newBusiness = { business : this.props.business}
        this.unAuthSubFunction = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user.uid);
                firebase.database().ref(user.uid).push(newBusiness.business.id);
            }
        })
    }

    render() {
        console.log(firebase.database())
        return (
          <MDBCol id="RestaurantCard">
              <MDBCard id="cardRow">
                  <MDBCardImage id="cardImg" className="img-fluid" src={this.props.business.image_url} waves alt={this.props.business.name}/>
                      <MDBCardBody id="card-body">
                          <MDBCardTitle>{this.props.business.name}</MDBCardTitle>
                              <MDBCardText>
                              Rating: {this.props.business.rating} ({this.props.business.review_count} reviews) <br />
                              {this.props.business.price} | {this.props.business.categories[0].title} <br /><br />
                              {this.props.business.location.address1}<br />
                              {this.props.business.location.city}, {this.props.business.location.state} {this.props.business.location.zip_code}
                          </MDBCardText>
                      <MDBBtn onClick={this.props.hideCard}>Hide Business</MDBBtn>
                      <MDBBtn onClick={this.saveToFirebase}>Save Business</MDBBtn>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
        )
    }

}
let apiKey = "TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx";