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
              xs = {12}
              sm = {4}>
              <img src = "./media/logo.png"
                  alt = ""
                  className = "topBarLogo" />
              <p className = "topBarTitle">
                PENIS-COIN
              </p>
          </Col>

          <Col xsHidden
              sm = {8}>
            <ul className = "topBarLinks">
              <li className = "topBarLink">
                <p className = "topBarText">
                  Overview
                </p>
              </li>

              <li className = "topBarLink">
                <p className = "topBarText">
                  Team
                </p>
              </li>

              <li className = "topBarLink">
                <p className = "topBarText">
                  FAQ
                </p>
              </li>

              <li className = "topBarLink">
                <p className = "topBarText">
                  Token Sale
                </p>
              </li>
            </ul>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default TopBar;
