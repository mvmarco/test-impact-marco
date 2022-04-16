import React from "react";

const Cocktails = ({ name, img }) => {
  return (
    <div>
      <h4>{name}</h4>
      <img src={img} alt="" />
    </div>
  );
};

export default Cocktails;
