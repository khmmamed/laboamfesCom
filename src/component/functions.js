import React from "react";
import Col from "./layout/Col";
import styled from "styled-components";

/*****STYLING COMPNENT****/
const Box = styled.div`
  margin-top: -100px;
  background-color: white;
  & > i {
    border-radius: 50%;
    display: inline-block;
    color: #fff;
    width: 1.6em;
    height: 1.6em;
    text-align: center;
    line-height: 1.6em;
    margin-bottom: 30px;
    background: #a6d330;
  }
`;

/****Component***/
/*------------------*/

//MENU NAVIGATION
export const NavMenu = ({ Items }) => (
  <div
    className="container navigation"
    style={{ height: "80px", backgroundColor: "white" }}
  >
    <div
      className="navbar-collapse navbar-right"
      style={{
        padding: "0",
        marginTop: "25px"
      }}
    >
      <ul className="nav navbar-nav">
        {Items.map(item => (
          <li className="">
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

//RAPID ACCESS BOXES
export const Boxes = ({ rubrics }) =>
  rubrics.map(rubric => (
    <Col col="col-sm-3 col-md-3">
      <Box className="box text-center">
        <i className={rubric.font} />
        <h4 style={{ fontSize: "25px", fontWeight: "bold" }}>
          {" "}
          {rubric.title}{" "}
        </h4>
        <p> {rubric.body} </p>
      </Box>
    </Col>
  ));
