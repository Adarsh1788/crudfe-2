import axios from "axios";

const commonApi = async (method, url, requestBody) => {
  let conFigObject = {
    method: method,
    url: url,
    data: requestBody,
  };

  return await axios(conFigObject)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export default commonApi;