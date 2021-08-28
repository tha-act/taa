import React from "react";
import Top from "./top";
import BlogImage from "./blogImage";
import Contact from "./contact";
import Envato from "./envato";
import Base from "./base";
import Us from "./us";
import Login from "./login";
import Dell from "./dell";
const Feeds = () => {
  return (
    <div>
      <Top/>
      <BlogImage />
      <Login/>
      <Dell/>
      <Us/>
      <Contact/>
      <Envato/>
      <Base/>
    </div>
  );
};

export default Feeds;
