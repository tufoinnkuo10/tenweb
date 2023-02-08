import React from "react";
import Nav from "./Nav";
import whyus from "../images/whyus.png";
import ConstructionFooter from "../construction/ConstructionFooter";
import './whyiz.css'
import Footer from './Footer'

export default function Whyiz() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <div className="imagee" style={{marginBottom:'2rem'}}>
          <img src={whyus} class="img-fluid" alt="..." />
        </div>
        <div>
          <p>
            <a
              class="hee btn btn-secondary"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              Our Core Values
            </a>
          </p>
          <div className="price-model">
            <div
              class="row"
              style={{
                paddingBottom: "5rem",
                marginRight: "10rem",
                marginLeft: "10rem",
              }}
            >
              <div class="col-sm-6">
                <div class="card">
                  <div class="ptextt card-body">
                    <h5 class="heed card-title">Ownership:</h5>
                    <p class="ptext card-text">
                      In this model, the project scope of work with its
                      associated cost and timeline is defined before development
                      starts. This is a preferred model for longer periods of
                      engagement. Client always has peace of mind of knowing the
                      project will remain on the same budget as agreed. This
                      model suits best to clients who have a perfect vision of
                      their requirement. Monthly Subscription Model
                    </p>
                    <a href="#" className="btn btn-info">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="pptext card-body">
                    <h5 class="heed card-title">Honesty:</h5>
                    <p class="ptext card-text">
                      This is very classic and simple way of engagement wherein
                      clients pay for the number of hours the developer works on
                      project. Clients easily start the project as they don't
                      have to walk in with detailed specifications. This model
                      also allows client to update new features any time and
                      clients know exactly what they’re paying for. This drives
                      a lot more trust and communication
                    </p>
                    <a href="#" className="btn btn-info">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="price-model">
            <div
              className="row"
              style={{
                paddingBottom: "5rem",
                marginRight: "10rem",
                marginLeft: "10rem",
              }}
            >
              <div class="col-sm-6">
                <div class="card">
                  <div class="pptext card-body">
                    <h5 class="heed card-title"> Customer-Centric:</h5>
                    <p class="ptext card-text">
                      In this model, the project scope of work with its
                      associated cost and timeline is defined before development
                      starts. This is a preferred model for longer periods of
                      engagement. Client always has peace of mind of knowing the
                      project will remain on the same budget as agreed. This
                      model suits best to clients who have a perfect vision of
                      their requirement. Monthly Subscription Model
                    </p>
                    <a href="#" className="btn btn-info">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card">
                  <div class="ptextt card-body">
                    <h5 class="heed card-title"> Working Together:</h5>
                    <p class="ptext card-text">
                      This is very classic and simple way of engagement wherein
                      clients pay for the number of hours the developer works on
                      project. Clients easily start the project as they don't
                      have to walk in with detailed specifications. This model
                      also allows client to update new features any time and
                      clients know exactly what they’re paying for. This drives
                      a lot more trust and communication
                    </p>
                    <a href="#" className="btn btn-info">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="price-model">
              <div
                class="row"
                style={{
                  paddingBottom: "10rem",
                  marginRight: "10rem",
                  marginLeft: "10rem",
                }}
              >
                <div class="col-sm-6">
                  <div class="card">
                    <div class="ptextt card-body">
                      <h5 class="heed card-title"> Impact Oriented:</h5>
                      <p class="ptext card-text">
                        In this model, the project scope of work with its
                        associated cost and timeline is defined before
                        development starts. This is a preferred model for longer
                        periods of engagement. Client always has peace of mind
                        of knowing the project will remain on the same budget as
                        agreed. This model suits best to clients who have a
                        perfect vision of their requirement. Monthly
                        Subscription Model
                      </p>
                      <a href="#" className="btn btn-info">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card">
                    <div class="pptext card-body">
                      <h5 class="heed card-title"> Impact Driven:</h5>
                      <p class="ptext card-text">
                        This is very classic and simple way of engagement
                        wherein clients pay for the number of hours the
                        developer works on project. Clients easily start the
                        project as they don't have to walk in with detailed
                        specifications. This model also allows client to update
                        new features any time and clients know exactly what
                        they’re paying for. This drives a lot more trust and
                        communication
                      </p>
                      <a href="#" className="btn btn-info">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="container text-center">
          <div class="row">
            <div class="col">
              <div className="secs">
                <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Ownership</h5>
                    <p class="card-text">
                      Ownership: We all play our part in bringing the vision to
                      life. The spirit of ownership and accountability permeates
                      across everything that we do - we don't just do it, we do
                      it well
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="secs">
                <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="secs">
                <div class="card" style="width: 18rem;">
                  <img src="..." class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
