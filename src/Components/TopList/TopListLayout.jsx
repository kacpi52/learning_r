import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TopList.scss";
import { Container, Row } from "react-bootstrap";
import SingleElem from "./SingleElem";
import { titleCollection } from "../../Utils/titleCollection";
import CustomButton from "../CustomButton/index";
import searchByTitle from "../../Lib/apiService";
import { addMovieDataGlobalState } from "../../Lib/store";

const TopListLayout = () => {
  const [listSize, setListSize] = useState(0);
  const [moviesDataHolder, setMoviesDataHolder] = useState([]);
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  const resultsStep = 10;

  const getDataFromApi = async (listRange) => {
    const tempDataArrayForRedux = [];
    for (let i = listRange; i < listRange + resultsStep; i++) {
      const apiRespData = await searchByTitle(titleCollection[i]);
      setMoviesDataHolder((arr) => [...arr, apiRespData]);
      tempDataArrayForRedux.push(apiRespData);
    }
    listRange + resultsStep > globalState.movieDataReducer.length &&
      dispatch(addMovieDataGlobalState(tempDataArrayForRedux));
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
          getDataFromApi(listSize);
        }}
      />
      <Container>
        <Row>{renderAllDataFromApi(moviesDataHolder)}</Row>
      </Container>
    </div>
  );
};

export default TopListLayout;
