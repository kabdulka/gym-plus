import axios, { AxiosRequestConfig } from "axios";

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

// export const fetchData = async (url: string, options) => {
//     try {
//         const response = await fetch(url, options);
//         console.log("here");
//         const data = await response.json();
//         return data;
//     } catch (e) {
//         console.log(e)
//     }
// }

export const fetchData = async (url: string, options: AxiosRequestConfig) => {
    try {
        const response = await axios.get(url, options);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.log(e)
    }
}