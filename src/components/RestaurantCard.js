import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import firebase from 'firebase';

//This renders the card of the business information. Contains buttons that allows users 
//to collapse the cards or save the business for future reference. 
export default class RestaurantCard extends Component {  
    
    //Saves business to the user's account realtime firebase database 
    saveToFirebase = (event) => {
        event.preventDefault();
        let newBusiness = { business : this.props.business}
        this.unAuthSubFunction = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref(user.uid).push(newBusiness.business.id);
            }
        })
    }

    render() {
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