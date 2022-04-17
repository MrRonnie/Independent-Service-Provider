import React from "react";
import { Placeholder } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Clients from "../Clients/Clients";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Services></Services>
      <Clients></Clients>
    </>
  );
};

export default Home;
