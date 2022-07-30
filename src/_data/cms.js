const axios = require("axios");

module.exports = async () => {
  const { data } = await axios.get(
    "http://jsonplaceholder.typicode.com/photos"
  );

  return data.slice(1, 4900);
};
