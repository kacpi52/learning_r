import React, { useState } from "react";
import "./TopList.scss";
import { Container, Row } from "react-bootstrap";
import SingleElem from "./SingleElem";
import { titleArray } from "./TitleArray";
import CustomButton from "../CustomButton/index";

const TopList = () => {
  const [listSize, setListSize] = useState(0);
  let displayArray = [];
  for (let i = 0; i < listSize; i++) {
    displayArray.push(<SingleElem movieTitle={titleArray[i]} />);
    console.log(listSize);
  }
  return (
    <div className="List">
      <CustomButton
        className={
          listSize < 30 ? "globalDarkButton" : "globalDarkButton--hidden"
        }
        textLabel={listSize > 0 ? "SHOW MORE" : "TOP 10"}
        onClick={() => {
          setListSize(listSize + 10);
        }}
      />
      <Container>
        <Row>{displayArray}</Row>
      </Container>
    </div>
  );
};

export default TopList;
