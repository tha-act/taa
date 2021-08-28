import React from "react";
import f1 from "./img/circle2.png";
import f2 from "./img/circle1.png";
import orange from "./img/orange.png";
import cow from "./img/cow.png";
import farm from "./img/farmland.png";
import icon1 from "./img/icon.svg";
// import f3 from "./img/circle@2x.png";
const Us = () => {
  return (
    <div className="feedback pad">
      <div className="cont">
        <p>
          This is due to their excellent service, competitive pricing and
          customer support. It’s throughly refresing to get such a personal
          touch. Duis aute lorem ipsum is simply free text irure dolor in
          reprehenderit in esse nulla pariatur.
        </p>
        <div className="flex cont comphoto">
          <img src={f1} alt="" />
          <img src={f2} alt="" />
          {/* <img src={f3} alt="" /> */}
        </div>
        <p  className=" comphoto">Jessica Brown</p>
        <p  className=" comphoto">Customer</p>
        ,<br />
      </div>
      <div className="cont feedback2 three ">
        <img src={icon1} alt="" srcset="" />
        <p>FROM THE BLOG POST</p>
        <div className="flex">
          <h2>Latest News & Articles Directly from Blog</h2>
          <p>
            Lorem ipsum is simply free text available. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean
            lacinia bibendum nulla sed consectetur.
          </p>
        </div>
        <div className="flex sa">
          <div>
            <img className="img-sm" src={orange} alt="" />
            <div className="white pad">
              <p> by Admin  2 Coments </p>
              <h3>Best Way to Do Eco and Agriculture</h3>
              <button>Read More</button>
            </div>
          </div>
          <div>
            <img className="img-sm" src={cow} alt="" />
            <div className="white pad">
              <p> by Admin  2 Coments </p>
              <h3>Best Way to Do Eco and Agriculture</h3>
              <button>Read More</button>
            </div>
          </div>
          <div>
            <img className="img-sm" src={farm} alt="" />
            <div className="white pad">
              <p> by Admin  2 Coments </p>
              <h3>Best Way to Do Eco and Agriculture</h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <h2>We Care About Our Agriculture Growth</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour
              words.
            </p>
          </div>
          <div className="flex ">
              <div className="box1 three mg"></div>
              <div className="box2 three mg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Us;
