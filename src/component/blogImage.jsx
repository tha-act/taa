import React from 'react';
import orange from "./img/orange.png";
import cow from "./img/cow.png";
import lemon from "./img/lemon.png";
const BlogImage = () => {
    return ( <div className="orange flex sa">
        <div className="three">
            <img className="img-sm" src={orange} alt="" />
            <p className="tag two">Agriculture Leader</p>
        </div>
        <div className="three">
            <img className="img-sm" src={cow} alt="" />
            <p className="tag two">Quality Standards</p>
        </div>
        <div className="three">
            <img className="img-sm" src={lemon} alt="" />
            <p className="tag two">Organic Services</p>
        </div>
    </div> );
}
 
export default BlogImage;