import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

export default class RestaurantCard extends Component {

  
    render() {
        return (
          <MDBCol id="RestaurantCard">
              <MDBCard style={{ 
                  width: "100%", 
                  height: "100%",
                  display: "flex",
                  "flex-direction": "row",
                }}>
                  <MDBCardImage style={{
                      height:"20rem",
                  }}
                  className="img-fluid" src={this.props.business.image_url} waves />
                      <MDBCardBody>
                          <MDBCardTitle>{this.props.business.name}</MDBCardTitle>
                              <MDBCardText>
                              Rating: {this.props.business.rating} ({this.props.business.review_count} reviews) <br />
                              {this.props.business.price} | {this.props.business.categories.title}
                          </MDBCardText>
                      <MDBBtn onClick={this.props.hideCard}>Hide business</MDBBtn>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
        )
    }

}