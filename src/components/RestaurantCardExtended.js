
import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class RestaurantCardExtended extends Component {  

    render() {
        return (
          <MDBCol id="RestaurantCardExtended">
              <MDBCard id="cardRow">
                  <MDBCardImage id="cardImg" className="img-fluid" src={this.props.image_url} waves alt={this.props.name}/>
                      <MDBCardBody id="card-body">
                          <MDBCardTitle>{this.props.name}</MDBCardTitle>
                              <MDBCardText>
                              Rating: {this.props.rating} ({this.props.review_count} reviews) <br />
                               {this.props.price} | {this.props.category} <br /><br />
                              {this.props.location.address1}<br />
                              {this.props.location.city}, {this.props.location.state} {this.props.location.zip_code} <br />
                              <br />
                              Reviews: 
                              <br />
                              <br />
                              {this.props.review} 
                          </MDBCardText> 
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
        )
    }
}