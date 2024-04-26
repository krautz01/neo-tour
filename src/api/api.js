import axios from "axios";

const instance = axios.create({
  baseURL: "kunasyl-backender.org.kg/api/",
});

const getData = (category) => {
  return instance.get(category);
};

const getDetailData = (id) => {
  return instance.get(id.data);
};

export { getData, getDetailData };
