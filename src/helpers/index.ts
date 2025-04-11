import axios from "axios";
export const getData = async  (url : string ) => {
    const response = await axios.get(url , {headers : { 'Content-Type' : 'application/json' }});
    return response.data;
}