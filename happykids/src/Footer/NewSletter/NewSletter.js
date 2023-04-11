import React from "react";
import "./NewSletter.css";

function NewSletter() {
  return (
    <div>
      <div className="NewSletter">
        <span className="text-Join">
          Join Our Mailing List
          <br />
        </span>
        <input
          type="text"
          placeholder="Enter your email here*"
          className="input"
        ></input>
        <button className="button">Subscribe Now</button>
      </div>
    </div>
  );
}

export default NewSletter;
