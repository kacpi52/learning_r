import React, { useState, useEffect } from "react";
import { AlertBox, Menu, ShopLayout } from "../Components/index";
import SELECTORS from "../Utils/Selectors";

const Shop = () => {
  const [mainItemsArray, setMainItemsArray] = useState([]);

  useEffect(() => {
    fetch(SELECTORS.filePath)
      .then((res) => res.text())
      .then((xmlString) => {
        const xmlDomObj = new window.DOMParser().parseFromString(
          xmlString,
          "text/xml"
        );
        const xmlOElems = xmlDomObj.getElementsByTagName(
          SELECTORS.tagSelectorByO
        );
        const xmlElemsArr = Array.from(xmlOElems).map((elem, i) => {
          return {
            price: elem.getAttribute(SELECTORS.tagSelectorByPrice),
            title: elem.querySelector(SELECTORS.tagSelectorByDesc).textContent,
            imgurl: elem
              .querySelector(SELECTORS.tagSelectorByImg)
              .getAttribute(SELECTORS.tagSelectorByImgUrl),
            producent: elem.querySelector(SELECTORS.tagSelectorByProducent)
              .textContent,
          };
        });
        setMainItemsArray(xmlElemsArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AlertBox />
      <Menu />
      <ShopLayout mainItemsArray={mainItemsArray} />
    </>
  );
};

export default Shop;
