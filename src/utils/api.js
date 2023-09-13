import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
    key: "AIzaSyBaSAJYlepUmr3rTDMKRNzpA7OUZPlTDeY",
    cx: "e59a05dc33be5481f"
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload }
    })

    return data;
};
