import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import Navigation from './Navigation'
import axios from 'axios';
import RestaurantCardExtended from './RestaurantCardExtended'


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
            reviews:[],
            review_counts:[],
            categories: []
        }

        this.changeState = this.changeState.bind(this);
    }

    //Once the businessID's have been fetched, fetch other information
    changeState(data) {
        this.setState({favBusinesses: data}, () => {
            this.state.favBusinesses.map((businessID) => {
                this.fetchRestaurantData(businessID);
                this.fetchRestaurantReviews(businessID);
                return null;
            })
            this.setState({
                isLoading : false
            })
        })
    }

    fetchRestaurantReviews = (businessID) => {
        let url = `https://api.yelp.com/v3/businesses/${businessID}/reviews`
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
            this.setState({
                addAlert: true
            })
        })
    }


    fetchRestaurantData = (businessID) => {
        let url = `https://api.yelp.com/v3/businesses/${businessID}`;
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
            let review_counts = this.state.review_counts;
            review_counts.push(res.data.review_count);
            let categories = this.state.categories;
            categories.push(res.data.categories[0].title)
            let locations = this.state.locations
            locations.push(res.data.location)
            this.setState({
                image_urls : image_urls,
                restaurant_urls: restaurant_urls,
                ratings: ratings,
                names: names,
                prices: prices,
                review_counts: review_counts,
                categories: categories
            })

        })
        .catch((err) => {
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
                    favorites = [...new Set(favorites)];
                    this.changeState(favorites);
                });
            } else {
                //console.log("signedOut")
                // give them an alert that they aren't signed in.
            }
        })
    }


    render() {
        if (this.state.isLoading || this.state.reviews.length !== this.state.restaurant_urls.length) {
            return (
                <div>
                    <div className="lower-opacity">
                        <Navigation />
                    </div>
                    <div className="spinner-border text-primary" role="status" id="spinner">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            )
        } 
        let cards = [];
        for (let i = 0; i < this.state.reviews.length; i++) {
            cards.push(<RestaurantCardExtended image_url={this.state.image_urls[i]} name={this.state.names[i]} review_count={this.state.review_counts[i]}
                price={this.state.prices[i]} location={this.state.locations[i]} category={this.state.categories[i]} key={this.state.names[i]}
                review={this.state.reviews[i]}/>);
        }
        return (
            <div>
                <Navigation />
                {cards}
            </div> 
        )
    }
}



let apiKey = "TMcGNjy6GrtE3xc5EFSCuNfX202sXbkyE9yq2pguPydM5ajHiNEjp8nd7qdOhZgHCO8FFk2OtpEolPd-6iTMVsp_frK2N0tx2gc1NEH0EaloyEWx-BJs1bHXT7F9XHYx";