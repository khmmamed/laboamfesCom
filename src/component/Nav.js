import React from "react";
import styled, { keyframes, css } from "styled-components";
import { connect } from "react-redux";

import { NavMenu } from "./functions";

/****Styling***/
const Toparea = styled.div`
  transition: all 0.4s ease-in-out;
  width: 100%;
  color: #fff;
  background-color: #a6d330;
`;
const WorkingTimeHover = `
  color: white;
`;
const WorkingTime = styled.span`
  color: black;
  &:hover {
    ${props => props.WorkingTimeHover}
  }
`;

const blinkEmergencyPhone = keyframes`
	0%  {color: white}
	49% {color: white}
	50% {color: red }
`;
const PhoneEmergency = styled.span`
  animation: ${blinkEmergencyPhone} 2s linear infinite;
`;
const Navbar = styled.nav`
  width: inherit;
  font-size: 18px;
  margin: 0 auto;
  padding-bottom: 0;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  -o-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
`;

/*****Component*****/
const Nav = props => (
  <Navbar
    className="navbar navbar-custom navbar-fixed-top top-nav-collapse"
    style={{
      backgroundColor: "white"
    }}
  >
    <Toparea>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6">
            {" "}
            <WorkingTime WorkingTimeHover={props.WorkingTimeHoverFromRedux}>
              Lundi - Samedi, 08h a 18h{" "}
            </WorkingTime>
          </div>
          <div
            className="col-sm-6 col-md-6"
            style={{
              textAlign: "right"
            }}
          >
            <PhoneEmergency>
              Urgence 24/24 - 7/7 : 00 (212)637521701
            </PhoneEmergency>
          </div>
        </div>
      </div>
    </Toparea>
    <NavMenu Items={props.topMenu} />
  </Navbar>
);

const mapStateToProps = state => ({
  topMenu: state.topMenu,
  WorkingTimeHoverFromRedux: state.WorkingTimeHoverFromRedux
});

export default connect(
  mapStateToProps,
  {}
)(Nav);
