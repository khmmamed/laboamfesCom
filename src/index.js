import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import styled, { keyframes } from "styled-components";
import Section from "./component/layout/Section";

import Footer from "./component/layout/Footer";
import Row from "./component/layout/Row";
import Container from "./component/layout/Container";

import { Boxes } from "./component/functions";
import Nav from "./component/Nav";

import store from "./store";

import img1 from "./img/lab1.jpg";

const Img = styled.img`
  width: 100%;
  height: 500px;
`;
const SubFooter = styled.div`
  margin-top: 30px;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
  padding: 30px 0 10px;
`;
const SocialCompany = styled.ul`
  list-style: none;
  margin-left: 0;
  padding-left: 0;

  & > li {
    margin: 0;
    padding: 0;
    display: inline-block;
    & > a {
      text-shadow: none;
      color: #337ab7;
      margin: 0 2px 0 0;
      & > i {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        text-align: center;
        border-radius: 3px;
        padding: 10px 0 0;

        &.fa-facebook {
          background: #3873ae;
        }
        &.fa-twitter {
          background: #62c6f8;
        }
        &.fa-google-plus {
          background: #000;
        }
        &.fa-vimeo-square {
          background: #51a6d3;
        }
        &.fa-dribbble {
          background: #d74980;
        }
      }
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Section id="Header">
        <Nav />
      </Section>
      <Section id="carrousel" height={500} style={{ marginTop: "125px" }}>
        <Img src={img1} />
      </Section>
      <Section classNames="home">
        <Container>
          <Row>
            <Boxes
              rubrics={[
                {
                  title: "Prendre un RendezVous",
                  font: "fa fa-calendar fa-3x",
                  body: "Vous Voulez Prendre un Rendez-Vous Clicker ici"
                },
                {
                  title: "Assistance immediat",
                  font: "fa fa-user-md fa-3x",
                  body: "Parler avec nous en direct"
                },
                {
                  title: "Avant de venir au Labortoire",
                  font: "fa fa-check fa-3x",
                  body:
                    "Clicker ici pour verifier les conditions de prelevement et les documents a apporter avec vous"
                },
                {
                  title: "Prelevement a Domicile",
                  font: "fa fa-tint fa-3x",
                  body:
                    "Nous désirons offris un service de prise de sang à domicile, à votre travail ou à notre centre selon votre disponibilité sans temps d'attente car votre heure de rendez-vous est respectée."
                }
              ]}
            />
          </Row>
        </Container>
      </Section>
      <Footer>
        <Container>
          <Row>
            <div className="col-sm-6 col-md-4">
              <h3>Espace Patient</h3>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li>Notre Mission</li>
                <li>Nos Engagements</li>
                <li>Notre Offre</li>
                <li>Mon Laboratoire</li>
                <li>Mes Resultats</li>
              </ul>
              <h3>Espace Professionnels</h3>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li>Notre Mission</li>
                <li>Nos Engagements</li>
                <li>Notre Offre</li>
                <li>Nos Catalogues des analyses</li>
                <li>Votre Serveur de Resultats</li>
                <li>Notre Actualité Pratique</li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4">
              <h3>Contact</h3>
              <span>
                Laboratoire Fes d' Analyses Médicales : Bd Bir Anzarane , lot
                n°8, résid. Nour, bur. n°11, Atlas, 30000 FES
              </span>
            </div>
            <div className="col-sm-6 col-md-4">
              <h3>Information</h3>
              <span>
                Analyses biologiques, diagnostic de laboratoires cliniques,
                biochimie clinique, hématologie, biochimie, bactériologie,
                virologie, sérologie, hormonologie, mycologie, parasitologie,
                toxicologie, test de fertilité et spérmiologie.
              </span>
              <h3>Suivez Nous</h3>
              <SocialCompany>
                <li className="social-facebook">
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="social-twitter">
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="social-google">
                  <a href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li className="social-vimeo">
                  <a href="#">
                    <i className="fa fa-vimeo-square" />
                  </a>
                </li>
                <li className="social-dribble">
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </SocialCompany>
            </div>
          </Row>
        </Container>
        <SubFooter>
          <Container>
            <Row>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="wow fadeInLeft animated">
                  <div className="text-left">
                    <p>©Copyright - khm(@)med. All rights reserved.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="wow fadeInRight animated">
                  <div className="text-right">
                    <div className="credits">
                      <p>
                        Designed by{" "}
                        <a href="https://khmamed.com/">KHM@MED Co(r)p.</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </SubFooter>
      </Footer>
    </div>
  );
}

console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
