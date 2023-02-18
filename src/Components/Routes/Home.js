import React from "react";
import image1 from "..../images/image1.jpg";

export const Home = () => {
  return (
    <div>
      <div className="quote">
        <h1>Home</h1>
      </div>
      <div className="img1">
        <img src={image1} alt="" />
      </div>
    </div>
  );
};
