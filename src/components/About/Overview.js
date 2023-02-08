import React, { useState } from "react";
import Nav from "./Nav";
import ConstructionFooter from "../construction/ConstructionFooter";
import {
  industries,
  process,
  frontend,
  backend,
  cloud,
  Devop,
  database,
} from "./data";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import * as React from 'react';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { margin } from "@mui/system";
import vision1 from "../images/vision.jpg";
import vision2 from "../images/vision2.jpg";
import vision3 from "../images/vision3.jpg";
import "./overview.css";
import Footer from './Footer'
// import * as React from 'react';
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Overview = () => {
  const [stack, setStack] = useState({
    frontend: false,
    backend: false,
    cloud: false,
    Devop: false,
    database: false,
  });

  const togglestack = (checkstack) => {
    console.log(checkstack, "checkking");
    if (checkstack === "frontend") {
      setStack({
        frontend: true,
        backend: false,
        cloud: false,
        Devop: false,
        database: false,
      });
    }
    if (checkstack === "backend") {
      setStack({
        frontend: false,
        backend: true,
        cloud: false,
        Devop: false,
        database: false,
      });
    }
    if (checkstack === "cloud") {
      setStack({
        frontend: false,
        backend: false,
        cloud: true,
        Devop: false,
        database: false,
      });
    }
    if (checkstack === "Devop") {
      setStack({
        frontend: false,
        backend: false,
        cloud: false,
        Devop: true,
        database: false,
      });
    }
    if (checkstack === "database") {
      setStack({
        frontend: false,
        backend: false,
        cloud: false,
        Devop: false,
        database: true,
      });
    }
    console.log(stack, "checkstack");
  };

  return (
    <main>
      <Nav />
      <div>
        <div className="vision">
          <h1>Vision</h1>
          <div
            style={{
              // marginLeft: "10rem",
              // marginRight: "10rem",
              height: "25rem",
            }}
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div
              class="carousel-inner"
              style={{
                // marginLeft: "10rem",
                marginRight: "10rem",
                height: "25rem",
              }}
            >
              <div class="carousel-item active">
                <img src={vision1} class="d-block w-100" alt="vision1" />
              </div>
              <div class="carousel-item">
                <img src={vision2} class="d-block w-100" alt="vision2" />
              </div>
              <div class="carousel-item">
                <img src={vision3} class="d-block w-100" alt="vision3" />
              </div>
            </div>
          </div>
          <p style={{ color: "#009DB9",fontWeight:'bolder', fontSize:'2rem' }}>
            Our vision is to Empower Cameroons SMEs Through Digitization
          </p>
        </div>
        <div className="Mission-objectives" style={{ margin: "10rem" }}>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <div className="reasons" class="reasons card-body">
                  <h5 class="heed card-title">
                    <strong>Mission</strong>
                  </h5>
                  <p class="card-text">
                    To increase the Productivity of SMEs by providing Reliable,
                    Scalable, and Performant Digital Solutions that will meet
                    daily needs and reduce their workloads.
                  </p>
                  <a href="#" class="btn btn-info">
                    Experience it
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <div className="reasons" class="reasons card-body">
                  <h5 class="heed card-title">
                    <strong>Objective</strong>
                  </h5>
                  <p class="card-text">
                    Ease Workloads on SMEs Thereby Increasing <br />
                    Their Productivity on The Market..
                  </p>
                  <a href="#" className="btn btn-info">
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="location"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            justifyContent: "flex-start",
            margin: "1",
            marginBottom: "1rem",
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            style={{
              marginLeft: "10rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <h1>Locations: </h1>
            <span>Cameroon, yaounde</span>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <span>Douala, Cameroon</span>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
          </Stack>
        </div>{" "}
        <div
          className="whoweserve"
          style={{
            margin: "10rem",
            marginTop: "2rem",
            paddingBottom: "2rem",
            paddingTop: "2rem",
          }}
        >
          <h1>Who We Serve</h1>
          <div class="accordion" id="accordionExample">
            <div className="ittem" class="ittem accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                style={{fontWeight:'bolder', color:'#009DB9', fontSize:'2rem'}}
                // className="buttt"
                  className="buttt accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Startup Business
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>info on startup.</strong> It is shown by default,
                  until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall
               though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="ittem accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                style={{fontWeight:'bolder', color:'rgb(5, 114, 114)', fontSize:'2rem'}}

                // className="buttt"
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Small & Medium Business
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>info about small and medium biz.</strong> It is hidden
                  by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="ittem accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                style={{fontWeight:'bolder', color:'rgb(5, 114, 114)', fontSize:'2rem'}}

                // className="buttt"
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Enterprise
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>info on this.</strong> info each element. info via CSS
                  transitions. You can modify any of this with custom CSS or
                  overriding our default variables. It's also worth noting that
                  just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div class="ittem accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                style={{fontWeight:'bolder', color:'rgb(5, 114, 114)', fontSize:'2rem'}}

                // className="buttt"
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Agencies
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingfour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <strong>info on agencies.</strong> info each element. info via
                  CSS transitions. You can modify any of this with custom CSS or
                  overriding our default variables. It's also worth noting that
                  just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Industries">
          <h2 className="heed">Industries we serve</h2>
          <Box
            sx={{
              width: "80%",
              // background: "#07c0c9",
              px: 5,
              py: 4,
              mx: "auto",
            }}
          >
            <Grid
              sx={{ width: "100%", mx: "auto" }}
              alignItems="center"
              justify="center"
              container
              rowSpacing={6}
              columnSpacing={{ xs: 2, sm: 3, md: 4, lg: 6 }}
            >
              {industries.map((item) => (
                <Grid
                  key={item.id}
                  item
                  xs={6}
                  md={4}
                  lg={3}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Card className="conte" style={{ heigth: "8rem" }} sx={{ width: "100%" }}>
                    <CardContent style={{ height: "100%", overflow: "hidden" }}>
                      <Typography
                        color={item.color}
                        classname="dtypo"
                        gutterBottom
                        component="div"
                      >
                        <span className="dlogo">{item.logo}</span>
                      </Typography>

                      <Typography gutterBottom component="div">
                        <span
                          style={{ fontWeight: "bolder" }}
                          className="dtextt"
                        >
                          {" "}
                          {item.Text}
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
        <div className="process">
          <h2 style={{margin:'2rem'}} className='heed'>process we follow</h2>

          {/* export default function RowAndColumnSpacing() {
  return ( */}
          <Box
          style={{borderRadius:'2rem'}}
            sx={{
              width: "80%",
              background: "",
              borderRadius: "2px",
              px: 5,
              py: 4,
              mx: "auto",
            }}
          >
            <Box
            
              sx={{
                width: "100%",
                mx: "auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
              alignItems="center"
              justify="center"
              container
              rowSpacing={4}
              columnSpacing={{ xs: 2, sm: 4, md: 6 }}
            >
              {process.map((item) => (
                <Box
                  style={{ margin: "0.5rem" }}
                  key={item.id}
                  className="boxflex"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Card className="cchover" sx={{ width: "100%" }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 100 }}
                        color={item.color}
                        classname="dtypo"
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        <span className="dlogo">{item.logo}</span>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span
                          style={{ fontSize: "1rem", color:'rgb(6, 155, 155)', fontWeight: "bolder" }}
                          className="dtext"
                        >
                          {" "}
                          {item.Heading}
                        </span>
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        <span style={{ fontSize: "14px" }} className="dtext">
                          {" "}
                          {item.Text}
                        </span>
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
          {/* );
} */}
        </div>
        <section>
          <h2 className="heed" style={{paddingTop:'3rem'}}>Technologies & Platforms We Us</h2>
          <div
            className="tech"
            style={{
              display: "fl",
              flexDirection: "ro",
              alignItems: "center",
              justifyContent: "center",
              padding: "rem",
              marginBottom: "5rem",
            }}
          >
            <button
              className="btn btn-info m-2 p-2 "
              onClick={() => togglestack("frontend")}
            >
              Frontend{" "}
            </button>
            <button
              className="btn btn-info m-2 p-2"
              onClick={() => togglestack("backend")}
            >
              backend{" "}
            </button>
            <button
              className="btn btn-info m-2 p-2"
              onClick={() => togglestack("cloud")}
            >
              cloud{" "}
            </button>
            <button
              className="btn btn-info m-2 p-2"
              onClick={() => togglestack("Devop")}
            >
              Devop{" "}
            </button>
            <button
              className="btn btn-info m-2 p-2"
              onClick={() => togglestack("database")}
            >
              database{" "}
            </button>

            <div class="row">
              <div class="col">
                <div className="cardhouse card card-body" >
                  <ul className="iconsflex">
                    {stack.frontend &&
                      frontend.map((item) => (
                        <li key={item.id}>
                          {item?.icon || item.name}
                          {item?.frameworks && (
                            <ul className="iconsflexx">
                              {item?.frameworks.map((frame, i) => (
                                <li color={frame.color} key={i}>{frame.icon}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    {stack.backend &&
                      backend.map((item) => (
                        <li key={item.id}>
                          {item?.icon || item.name}
                          {item?.frameworks && (
                            <ul className="iconsflexx">
                              {item?.frameworks.map((frame, i) => (
                                <li color={frame.color} key={i}>{frame.icon}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    {stack.database &&
                      database.map((item, i) => (
                        <li key={i}>
                          {item?.icon || item.name}
                          {item?.dataa && (
                            <ul className="iconsflexx">
                              {item?.dataa.map((data, i) => (
                                <li color={data.color} key={i}>{data.icon}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    {stack.cloud &&
                      cloud.map((item) => <li key={item.id}>{item.icon}</li>)}
                    {stack.Devop &&
                      Devop.map((item, i) => (
                        <li key={i}>
                          {item?.icon || item.name}
                          {item?.dataa && (
                            <ul className="iconsflexx">
                              {item?.dataa.map((data, i) => (
                                <li color={data.color} key={i}>{data.icon}</li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="price">
          <p>
            <a
              class="btn btn-primary"
              data-bs-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              Our Pricing Policy
            </a>
          </p>
          <div class="row"></div>

          <div className="price-model">
            <div
              class="row"
              style={{
                paddingBottom: "3rem",
                marginRight: "10rem",
                marginLeft: "10rem",
              }}
            >
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="heed card-title">Fixed Price Model:</h5>
                    <p class="card-text">
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
                  <div class="card-body">
                    <h5 class="heed card-title">Time & Material Model:</h5>
                    <p class="card-text">
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
          <Footer />
        </div>
        <section className="whoweserve"></section>
      </div>
    </main>
  );
};

export default Overview;
