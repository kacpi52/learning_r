import React, { useCallback, useState } from "react";
import "./TopList.scss";
import { Container, Row } from "react-bootstrap";
import SingleElem from "./SingleElem";
import { titleCollection } from "../../Lib/titleCollection/titleCollection";
import CustomButton from "../CustomButton/index";
import { searchByTitle } from "../../Lib/apiService/apiService";

const TopListLayout = () => {
  const [listSize, setListSize] = useState(0);
  const [moviesDataHolder, setMoviesDataHolder] = useState([]);
  const resultsStep = 10; // ilosc ile wiecej chcemy miec zaladowanych rezultatow co krok
  const getDataFromApi = async () => {
    switch (listSize) {
      default:
        for (let i = listSize; i < listSize + resultsStep; i++) {
          const apiRespData = await searchByTitle(titleCollection[i]);
          setMoviesDataHolder((arr) => [...arr, apiRespData]);
        }
        break;
      case 10:
        for (let i = listSize; i < listSize + resultsStep; i++) {
          const apiRespData = await searchByTitle(titleCollection[i]);
          setMoviesDataHolder((arr) => [...arr, apiRespData]);
        }
        break;
      case 20:
        for (let i = listSize; i < listSize + resultsStep; i++) {
          const apiRespData = await searchByTitle(titleCollection[i]);
          setMoviesDataHolder((arr) => [...arr, apiRespData]);
        }
        break;
    }
  };

  const renderAllDataFromApi = useCallback((arr) => {
    return arr.map((elem) => (
      <SingleElem key={elem.imdbID} poster={elem.Poster} />
    ));
  }, []);
  return (
    <div className="List">
      <CustomButton
        className={
          listSize < 30
            ? listSize >= 10
              ? "globalDarkButton--bottom"
              : "globalDarkButton"
            : "globalDarkButton--hidden"
        }
        textLabel={listSize > 0 ? "SHOW MORE" : "TOP 10"}
        onClick={() => {
          setListSize(listSize + resultsStep);
          getDataFromApi();
        }}
      />
      <Container>
        <Row>{renderAllDataFromApi(moviesDataHolder)}</Row>
      </Container>
    </div>
  );
};

export default TopListLayout;
