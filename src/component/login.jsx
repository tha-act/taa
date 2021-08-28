import React from "react";
import icon1 from "./img/icon.svg";
import caterpillar from "./img/catapillar.png";
import cat1 from "./img/cartoon1.png";
import cat2 from "./img/cartoon2.png";
import farm from "./img/farmland.png";
const Login = () => {
  return (
    <div className="cont pad">
      <div className="flex">
        <div>
          <img src={caterpillar} alt="" />
          <img className="two rec " src={farm} alt="" />
        </div>
        <div className="feedback2  login">
          <img src={icon1} alt="" srcset="" />
          <p>WELCOME TO AGRICON </p>
          <h2>Better Agriculture for Better Future</h2>
          <h5>
            We have 30 years of agriculture & eco farming experience globaly
          </h5>
          <p>
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected humor
            or random word which don't look even.
          </p>
          <br />
          <br />
          <div className="flex sa">
            <div className="flex">
              <img src={cat1} alt="" />
              <p>Professional Farmers</p>
            </div>
            <div className="flex">
              <img src={cat2} alt="" />
              <p>Organic & Eco Solutions</p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <button>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
