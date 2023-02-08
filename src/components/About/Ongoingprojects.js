import React from "react";
import Nav from "./Nav";
import ConstructionFooter from "../construction/ConstructionFooter";
import projects from "../images/projecs.jpg";
import minerva from "../images/minerva.png";
import bios from "../images/logo.png";
import './ongoing.css'
import Footer from './Footer'

export default function Ongoingprojects() {
  return (
    <div>
      <Nav />
      <div className="main">
        <h2 className="projectss">Projects</h2>
        <div className="projectimage">
          <img src={projects} class="img-fluid" alt="..." />
        </div>
        <div className="projectlist" style={{marginLeft:'10rem', marginRight:'10rem', marginBottom:'5rem', paddingTop:'5rem'}}>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  className="heedd accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Project one
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  information about the project <code>.accordion-flush</code>{" "}
                  class. This is the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="heedd accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  project two
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  information about the projecthe <code>.accordion-flush</code>{" "}
                  class. information about the projectn body. Let's imagine this
                  being filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="heedd accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  project 3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  information about the project <code>.accordion-flush</code>{" "}
                  information about the project Nothing more exciting happening
                  here in terms of content, but just filling up the space to
                  make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
          <div className="carrouselproject" style={{marginBottom:'15rem'}}>
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="false"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="caro carousel-inner">
                <div class="carousel-item active">
                  <img src={bios} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 style={{color:'black'}}>Bioss...</h5>
                    <p style={{color:'black'}}>info about bios</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src={minerva} class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5 style={{color:'blue'}}>Minerva</h5>
                    <p style={{color:'blue'}}>info of minerva</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
