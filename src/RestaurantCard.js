import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class RestaurantCard extends Component {  
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
                      <MDBBtn onClick={this.props.hideCard}>Hide business</MDBBtn>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
        )
    }

}