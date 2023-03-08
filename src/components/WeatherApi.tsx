import axios from "axios";
export async function Weather(city: string) {
  const res = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=6d55add6363a44b4bfb150010230803&q=${city}&aqi=no`
  );
  return res.data;
}
