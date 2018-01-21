import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';

class TopBar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className= "TopBarContainer">
        <Grid className= "TopBar">
          <Col className = " topBarSection"
              xs={2}>
              <img src = "/media/logo.png"
                  alt = ""
                  className = "topBarLogo" />
              <p className = "topBarTitle">
                PENIS-COIN
              </p>
          </Col>

          <Col className = "topBarSection overview"
              xs = {1}
              xsOffset = {6}>
              <p className = "topBarText">
                Overview
              </p>
          </Col>

          <Col className = "topBarSection team"
              xs = {1}>
              <p className = "topBarText">
                Team
              </p>
          </Col>

          <Col className = "topBarSection faq"
              xs = {1}>
              <p className = "topBarText">
                FAQ
              </p>
          </Col>

          <Col className = "topBarSection token-sale"
              xs = {1}>
              <p className = "topBarText">
                Token Sale
              </p>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default TopBar;
