import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Menu, ShopLayout } from "../Components/index";
import convertXmlToArray from "../Lib/convertXml/convertXmlToArray";
import { addDataGlobalState } from "../Lib/globalState";

const Shop = () => {
  const [mainItemsArray, setMainItemsArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getXmlArray = async () => {
      const respXmlArray = await convertXmlToArray();
      setMainItemsArray(respXmlArray);
      dispatch(addDataGlobalState("xml", respXmlArray));
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

export default Shop;
