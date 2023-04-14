import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Menu, ShopLayout } from "../Components/index";
import convertXmlToArray from "../Lib/convertXml";
import { addXmlDataGlobalState } from "../Lib/store";

const ShopPage = () => {
  const [mainItemsArray, setMainItemsArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getXmlArray = async () => {
      const respXmlArray = await convertXmlToArray();
      setMainItemsArray(respXmlArray);
      dispatch(addXmlDataGlobalState(respXmlArray));
    };
    getXmlArray();
  }, []);

  return (
    <>
      <Menu />
      <ShopLayout mainItemsArray={mainItemsArray} />
    </>
  );
};

export default ShopPage;
