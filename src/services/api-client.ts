import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "72a6ea5c45ba4f0b90c7bb5e9dd88075",
  },
});
