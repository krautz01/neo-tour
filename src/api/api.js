import axios from "axios";

const instance = axios.create({
  baseURL: "kunasyl-backender.org.kg/api/",
});

export { getData, getDetailData };
