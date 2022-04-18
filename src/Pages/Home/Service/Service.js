import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToCheckout = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <Card className="service-card text-center shadow rounded  mt-3 mx-auto">
      <Card>
        <img className="w-100" src={img} alt="" />
        <Card.Title>{name}</Card.Title>
        <Card.Text className="text-warning">Price: ${price}</Card.Text>
        <p>
          <small>{description}</small>
        </p>
        <Button
          onClick={() => navigateToCheckout(id)}
          className="btn btn-primary w-50 mx-auto mb-3"
        >
          Buy Package
        </Button>
      </Card>
    </Card>
  );
};

export default Service;
