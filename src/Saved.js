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
import RestaurantCard from './RestaurantCard';


export default class Saved extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favBusinesses: null,
            isLoading: true,
            addAlert: false,
            image_urls: [],
            restaurant_urls: [],
            ratings: [],
            names:[],
            prices:[],
            locations:[],
            coordinates:[],
            reviews:[]
        }

        this.changeState = this.changeState.bind(this);
    }

    //Once the businessID's have been fetched, fetch other information
    changeState(data) {
        this.setState({favBusinesses: data}, () => {
            this.state.favBusinesses.map((businessID) => {
                this.fetchRestaurantData(businessID);
                this.fetchRestaurantReviews(businessID);
            })
            this.setState({
                isLoading : false
            })
        })
    }

    fetchRestaurantReviews = (businessID) => {
        let url = `https://api.yelp.com/v3/businesses/${businessID}/reviews`
        console.log(url)
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}` + url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((res) => {
            let oldReviews = this.state.reviews;
            oldReviews.push(res.data.reviews[0].text);
            this.setState({
                reviews: oldReviews
            })
        })
        .catch((err) => {
            console.log(err)
            this.setState({
                addAlert: true
            })
        })
    }


    fetchRestaurantData = (businessID) => {
        let url = `https://api.yelp.com/v3/businesses/${businessID}`;
        console.log(url)
        axios.get(`${'https://cors-anywhere.herokuapp.com/'}` + url, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then((res) => {
            let image_urls = this.state.image_urls
            image_urls.push(res.data.image_url);
            let restaurant_urls = this.state.restaurant_urls;
            restaurant_urls.push(res.data.url)
            let ratings = this.state.ratings;
            ratings.push(res.data.rating);
            let names = this.state.names;
            names.push(res.data.name);
            let prices = this.state.prices;
            prices.push(res.data.price);
            this.setState({
                image_urls : image_urls,
                restaurant_urls: restaurant_urls,
                ratings: ratings,
                names: names,
                prices: prices

            })

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
                        favorites = (Object.values(values).map((value) => {
                            return value;
                        }));
                    }
                    this.changeState(favorites);
                });
            }
        })
    }


    render() {
        if (this.state.isLoading || this.state.reviews.length !== this.state.restaurant_urls.length) {
            return (
                <div>
                    <div className="lower-opacity">
                        <MainNavbar />
                    </div>
                    <div className="spinner-border text-primary" role="status" id="spinner">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } 
        // let cards;
        // for (let i = 0; i < this.state.reviews.length; i++) {
        //     cards.push(<RestaurantCardExtended image_url={this.state.image_urls[i]} name={this.state.names[i]}/>);
        // }
        return (
            // <div>
                <MainNavbar />
                /* {cards}
            </div> */
        )
    }
}


class RestaurantCardExtended extends Component {  

    render() {
        console.log(firebase.database())
        return (
          <MDBCol id="RestaurantCard">
              <MDBCard id="cardRow">
                  <MDBCardImage id="cardImg" className="img-fluid" src={this.props.image_url} waves alt={this.props.name}/>
                      <MDBCardBody id="card-body">
                          <MDBCardTitle>{this.props.name}</MDBCardTitle>
                              {/* <MDBCardText>
                              Rating: {this.props.business.rating} ({this.props.business.review_count} reviews) <br />
                              {this.props.business.price} | {this.props.business.categories[0].title} <br /><br />
                              {this.props.business.location.address1}<br />
                              {this.props.business.location.city}, {this.props.business.location.state} {this.props.business.location.zip_code}
                          </MDBCardText> */}
                      {/* <MDBBtn onClick={this.props.hideCard}>Hide Business</MDBBtn>
                      <MDBBtn onClick={this.saveToFirebase}>Save Business</MDBBtn> */}
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
        )
    }

}
let apiKey = "TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx";