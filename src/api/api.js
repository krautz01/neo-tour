import axios from "axios";

const instance = axios.create({
  baseURL: "kunasyl-backender.org.kg/api/",
});

const getData = (category) => {
  return instance.get(category);
};

const fetchTours = async () => {
  try {
    const response = await axios.get(
      "https://kunasyl-backender.org.kg/api/tours/"
    );
    setTours(response.data);
    console.log(tours);
  } catch (error) {
    console.log("Error fetching meal details:");
  }
};

const getDetailData = (id) => {
  return instance.get(id.data);
};

export { getData, getDetailData };
