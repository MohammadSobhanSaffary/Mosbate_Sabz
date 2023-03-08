"use client";
import { Weather } from "@/components/WeatherApi";
import axios from "axios";
import React, { useEffect, useState } from "react";
const BASE_URL = "http://api.weatherapi.com/v1/current.json";
const key = "6d55add6363a44b4bfb150010230803";
function page() {
  const [city, setCity] = useState("Tehran");
  const data: any = Weather("Tehran");
  return (
    <div>
      <button onClick={() => console.log(data)}>TEST</button>
      <div></div>
      <div></div>
    </div>
  );
}

export default page;
