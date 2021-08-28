import React from "react";
import {Link} from "react-router-dom";
import icon from "./img/icon.svg";
import cell from "./img/126341.png";
import mail from "./img/561188.png";
import location from "./img/484169.png";

const Base = () => {
  return (
    <div className="contact sa">
      <div className="cont flex">
        <article className="pad">
          <div className="flex">
            <img src={icon} alt="" />
            <h3>agrikon</h3>
          </div>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority suffered.
          </p>
          <input placeholder="Email Address" />
        </article>
        <article className="pad">
          <h5>Link</h5>
          <ul>
            <li><Link to="#">Our Projects</Link></li>
            <br />
            <li><Link to="#">About us</Link></li>
            <br />
            <li><Link to="#">New Campaign</Link></li>
            <br />
            <li><Link to="#">Upcoming Events</Link></li>
            <br />
            <li><Link to="#">Volunteers</Link></li>
          </ul>
        </article>
        <article className="pad">
          <h5>News</h5>
          <form action="#">
            <input type="checkbox" />
            <label htmlFor="">
              Nov 16, 2020 How to grow vagetables in the forms
            </label>
            <br />
            <br />
            <input type="checkbox" />
            <label htmlFor="">
              Nov 16, 2020 How to grow vagetables in the forms
            </label>
            <br />
            <br />
          </form>
        </article>
        <article className="pad">
          <h5>Contact</h5>
          <form action="">
            <img src={cell} alt="" />
            <label htmlFor="">666 888 0000</label>
            <br />
            <br />
            <img src={mail} alt="" />
            <label htmlFor="">needhelp@company.com</label>
            <br />
            <br />
            <img src={location} alt="" />
            <label htmlFor="">
              80 broklyn golden street line New York, USA
            </label>
            <br />
            <br />
          </form>
        </article>
      </div>
    </div>
  );
};

export default Base;
