import React from "react";
import { Menu } from "../Components/index";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAllDataGlobalState,
  deleteDataGlobalState,
} from "../Lib/globalState";
const UserPage = () => {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <Menu />
      <h1>REGISTER PANEL </h1>
      <p>Register form and user page. </p>
      <h4>Temporary used for global state check </h4>
      <button
        onClick={() => {
          dispatch(deleteDataGlobalState("xml"));
        }}
      >
        delete xml data
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(deleteDataGlobalState("api"));
        }}
      >
        delete movie data
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(deleteAllDataGlobalState());
        }}
      >
        delete all data
      </button>
      <p>Xml elems in global state is: {globalState.dataFromXml.length}</p>
      <p>
        Movies elems in global state is: {globalState.dataFromMovieApi.length}
      </p>
    </>
  );
};

export default UserPage;
