import React, { useState, useEffect } from "react";
import { Menu, ShopLayout } from "../Components/index";
import convertXmlToArray from "../Lib/convertXml/convertXmlToArray";

const Shop = () => {
  const [mainItemsArray, setMainItemsArray] = useState([]);

  useEffect(() => {
    const getXmlArray = async () => {
      const respXmlArray = await convertXmlToArray();
      setMainItemsArray(respXmlArray);
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
