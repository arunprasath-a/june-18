import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePageComponent from "../components/homepage";
import LogInPageComponent from "../components/loginpage";
import AboutUsPageComponent from "../components/aboutpage";

import SignUpPageComponent from "../components/signuppage";
//import GridExample from "../components/testgrid";
import AmChartsComponent from "../components/aMchartsPage";



class RouterComponent extends React.Component {

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Route path="/" exact strict component={HomePageComponent} />
          <Route path="/SignUp/" exact strict component={SignUpPageComponent} />
          <Route path="/LogIn/" exact strict component={LogInPageComponent} />
          <Route path="/About/" exact strict component={AboutUsPageComponent} />
          <Route path="/charts/" exact strict component={AmChartsComponent} />
          {/* <Route path="/test/" exact strict component={GridExample} /> */}

        </div>
      </Router>
    );
  }
}

export default RouterComponent;