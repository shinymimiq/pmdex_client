import Axios from "axios"

// Reference URL: https://github.com/ShinteiMai/react-pokedex/blob/965b64f8e1ca0bcc8780a6d865cf672a8e408a54/src/api/axios.ts


const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

const apiRequest = async(
  url, method, data, retries = 1
) => {
  try {
    const res = await axios({
      url, method, data,
    });
    return res.data;
  } catch (err) {
    if (retries > 0){
      return apiRequest(url+"/", method, data, retries - 1)
    } else {
      console.error(err);
      throw new Error(err);
    }
  }
};

class apiGenerator {
  getPokemonByName(id) {
    return apiRequest(`/pokemon/${id}`, "GET", {});
  }
}

const apiGen = new apiGenerator();
export default apiGen;