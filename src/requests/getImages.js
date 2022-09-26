import axios from "axios";
const endpoint = "https://images-api.nasa.gov/search?q=";

const getImages = (query) => {
  if (!query) {
    return Promise.resolve([]);
  }
  return axios
    .get(`${endpoint}${query}`)
    .then((response) =>
      response.data.collection.items.filter(
        (item) => item.data[0].media_type === "image"
      )
    )
    .catch((err) => console.log(err));
};

export default getImages;
