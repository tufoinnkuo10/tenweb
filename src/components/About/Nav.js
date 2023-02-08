import React from "react";
import Izlogo from "../images/IZ-Logoo.png";
import "./Nav.css";
import { Link } from "react-router-dom";
import { fontWeight, height } from "@mui/system";

const Nav = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "0",
        }}
        class="navbar navbar-expand-lg bg-light"
      >
        <div
          class="container-fluid"
          style={{
            background: "#f0f0f0",
            height: "5rem",
            borderBottom:'1px solid rgb(62, 151, 202)'
          }}
        >
          <div className="logo">
            <Link to="/">
              <img
                src={Izlogo}
                style={{ marginLeft: "3rem" }}
                className="logo"
                alt="BigCo Inc. logo"
              />
            </Link>
          </div>

          <div className="navitems">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul
                class="navbar-nav me-auto mb-2 mb-lg-0"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <li
                  className="about nav-item dropdown"
                  style={{ marginRight: "6rem", textDecoration: "none" }}
                >
                  <a
                    className="about"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bolder",
                      color: "rgb(10, 128, 175)",
                      fontSize: "1.7rem",
                    }}
                    class="nav-link dropdown-togg"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About
                  </a>
                  <ul
                    className="dropdown-menu"
                    style={{
                      // background: "#3fe8ede3",
                      padding: "1rem",
                      alignItems: "center",
                      paddingLeft: "1rem",
                      justifyContent: "start",
                      flexDirection: "column",
                    }}
                  >
                    <li>
                      <Link
                        to="/overview"
                        style={{ textDecoration: "none", fontSize: "1.5rem" }}
                      >
                        Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/whyiz"
                        style={{ textDecoration: "none", fontSize: "1.5rem" }}
                      >
                        Why TENWEB
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/whoweserve"
                        style={{ textDecoration: "none", fontSize: "1.5rem" }}
                      >
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ongoingprojects"
                        style={{ textDecoration: "none", fontSize: "1.5rem" }}
                      >
                        Projects
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* <li className="home nav-item" style={{marginRight:'5rem'}}>
                  <Link to="/" className="linkkk" style={{ textDecoration: 'none',fontWeight:'bolder',color:'rgb(10, 128, 175)',fontSize:'1.7rem' }}>
                    HOME
                  </Link>
                </li> */}
              </ul>
              {/* <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
