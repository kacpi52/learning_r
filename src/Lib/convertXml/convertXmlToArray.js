import axios from "axios";
import SELECTORS from "../../Utils/Selectors/xmlSelectors";

const convertXmlToArray = async () => {
  const xmlConvertToArrayAxiosInstance = axios.create({
    baseURL: SELECTORS.filePath,
  });
  const { data } = await xmlConvertToArrayAxiosInstance.get();
  const xmlToDomObj = new window.DOMParser().parseFromString(
    data,
    "application/xml"
  );
  const xmlOElems = xmlToDomObj.getElementsByTagName(SELECTORS.tagSelectorByO);
  const xmlElemsArr = Array.from(xmlOElems);
  const xmlElemsArrMapped = xmlElemsArr.map((elem) => ({
    price: elem.getAttribute(SELECTORS.tagSelectorByPrice),
    title: elem.querySelector(SELECTORS.tagSelectorByDesc).textContent,
    imgurl: elem
      .querySelector(SELECTORS.tagSelectorByImg)
      .getAttribute(SELECTORS.tagSelectorByImgUrl),
    producent: elem.querySelector(SELECTORS.tagSelectorByProducent).textContent,
  }));

  return xmlElemsArrMapped;
};

export default convertXmlToArray;
