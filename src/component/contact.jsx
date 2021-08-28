import React from "react";
import image from "./img/Image.png";
import icon1 from "./img/icon.svg";

const Contact = () => {
  return (
    <div className="flex cont sa ">
      <img className="img-sm"  src={image} alt="" srcset="" />
      <div className="pad">
        <img src={icon1} alt="" />
        <p>CONTACT NOW</p>
        <h2>Leave Us A Message</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.
          Aenean tincidunt.
        </p>
      </div>
      <form action="#">
          <input  type="text"  placeholder="Full Name "/>
          <input  type="email" placeholder="Email Address" />
          <input  type="phone"placeholder="Phone Number" />
          <textarea  name="" id="" cols="30" rows="10" placeholder="Write Message"></textarea>
          <button >Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
