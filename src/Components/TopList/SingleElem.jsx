import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleElem = ({ poster }) => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Image src={poster} rounded />
    </Col>
  );
};

export default SingleElem;
