import { baseUrl } from "./baseurl";
import commonApi from "./CommonApi";

export const getData = async () => {
  return await commonApi("get", `${baseUrl}/name`, "");
};

export const createData = async (requestBody) => {
  return await commonApi("post", `${baseUrl}/name`, requestBody);
};

export const deleteData =async(id)=>{
    return await commonApi("delete",`${baseUrl}/name/${id}`,{})
}

export const editDataa =async(id,requestBody)=>{
return await commonApi("patch",`${baseUrl}/name/${id}`,requestBody)
}