import axios from "axios";

const instance = axios.create({
  baseURL: "kunasyl-backender.org.kg/api",
});

const getData = (category) => {
  let url = "";
  switch (category) {
    case Popular:
      url = "/tours/popular/";
    case Featured:
      url = "/tours/featured/";
    case Most_Visited:
      url = "/tours/most_visited/";
    case Europe:
      url = "/tours/europe/";
    case Asia:
      url = "/tours/asia/";
    case Reccommended:
      url = "/tours/recommended/";
  }
  return instance.get(url);
};

const getDetailData = (id) => {
  return instance.get(`/tours/${id}`);
};

export { getData, getDetailData };
