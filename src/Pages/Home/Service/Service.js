import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    // <div className="service">
    //   <img className="w-100" src={img} alt="" />
    //   <h2>{name}</h2>
    //   <p>Price: {price}</p>
    //   <p>
    //     <small>{description}</small>
    //   </p>
    //   <button
    //     onClick={() => navigateToServiceDetail(id)}
    //     className="btn btn-primary "
    //   >
    //     Book: {name}
    //   </button>
    // </div>
    <Card className="service-card text-center shadow rounded  mt-3 mx-auto">
      <Card>
        <img className="w-100" src={img} alt="" />
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-warning">Price: ${price}</Card.Text>
        <p>
          <small>{description}</small>
        </p>
        <Button
          onClick={() => navigateToServiceDetail(id)}
          className="btn btn-primary w-50 mx-auto mb-3"
        >
          Go somewhere
        </Button>
      </Card>
    </Card>
  );
};

export default Service;
