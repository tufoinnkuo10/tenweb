import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

import './footer.css'

export default function Footer() {
  return (
    <div className="maindiv">
      <section className="linkline">
        <div className="contactus">
          <h1>Contact Us</h1>
          <a href="contact@izsofwares.com">contact@TENweb.com</a>
        </div>
        <div className="followus">
            <h2>Follow us</h2>
          <ul className="greetlist">
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillFacebook />
            </li>
            <li>
              <AiOutlineTwitter />
            </li>
            <li>
              <AiFillLinkedin />
            </li>
          </ul>
        </div>
      </section>
      <div className="centerline">
        <h2>
          Copyright © 2022 TENweb Construction Page. All Rights Reserved.
        </h2>
      </div>
    </div>
  );
}
