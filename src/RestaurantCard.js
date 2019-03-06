import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class RestaurantCard extends Component {

  
    render() {
        return (
          <MDBCol id="RestaurantCard">
              <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage className="img-fluid" src={this.props.business.image_url} waves />
                      <MDBCardBody>
                          <MDBCardTitle>{this.props.business.name}</MDBCardTitle>
                              <MDBCardText>
                              Some quick example text to build on the card title and make
                              up the bulk of the card&apos;s content.
                          </MDBCardText>
                      <MDBBtn onClick={this.props.hideCard}>Hide business</MDBBtn>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
        )
    }

}