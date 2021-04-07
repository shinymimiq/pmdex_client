import Axios from "axios"
import localforage from "localforage"

// Reference URL: https://github.com/ShinteiMai/react-pokedex/blob/965b64f8e1ca0bcc8780a6d865cf672a8e408a54/src/api/axios.ts

localforage.config({
  driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
  name: 'pokeapi_db'
})

const CACHE_PREFIX = "pokeapi"

const axios = Axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

const apiRequest = (url) => {
  return new Promise((resolve, reject) => {
    localforage.ready()
    .then(() => {
      localforage.getItem(`${CACHE_PREFIX}${url}`)
      .then(res => {
        if (res === null) {
          remoteApiRequest(url)
          .then(res => {resolve(res)})
          .catch(e => {reject(e)})
        } else {
          resolve(res);
        }
      })
      .catch(err => {
        remoteApiRequest(url)
        .then(res => {resolve(res)})
        .catch(e => {reject(e)})
      })
    })
    .catch(err => {
      remoteApiRequest(url)
      .then(res => {resolve(res)})
      .catch(e => {reject(e)})
    })
  })
}

const remoteApiRequest = async(
  url, retries = 1
) => {
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(res => {
      if (res.status >=400) {
        console.log(`${url}/`);
        axios.get(`${url}/`)
        .then(res => {
          localforage.setItem(`${CACHE_PREFIX}${url}`, res.data);
          resolve(res.data);
        })
        .catch(e => {reject(e)})
      } else {
        localforage.setItem(`${CACHE_PREFIX}${url}`, res.data);
        resolve(res.data);
      }
    })
    .catch(e => {
      console.log(`${url}/`);
      axios.get(`${url}/`)
      .then(res => {
        localforage.setItem(`${CACHE_PREFIX}${url}`, res.data);
        resolve(res.data);
      })
      .catch(e => {reject(e)})
    })
  })
};

class apiGenerator {
  getPokemonByName(id) {
    return apiRequest(`/pokemon/${id}`);
  }

  getAbilityByName(id) {
    return apiRequest(`/ability/${id}`);
  }
}

const apiGen = new apiGenerator();
export default apiGen;