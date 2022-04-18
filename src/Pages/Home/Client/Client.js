import React from "react";
import "./Client.css";

const Client = ({ client }) => {
  const { name, img } = client;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 mt-3 ">
      <div
        className="client-card shadow-lg rounded mt-3 mx-auto"
        style={{ width: "18rem" }}
      >
        <img src={img} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            I've owned so many great photos and full frame photos both high and
            low end. This one is my favorite! Jessica just nails the colors{" "}
            <br />
            <small>
              <span className="text-primary cursor-pointer">See More ...</span>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Client;
