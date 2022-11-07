import React, { useState, useEffect } from "react";

import axios from "axios";
import PropertiesList from "./PropertiesList";

const Test = () => {
  //loading
  const [loading, setLoading] = useState(false);

  //Properties
  const [properties, setProperties] = useState([]);
  //FilterState
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const baseUrl = "https://bayut.p.rapidapi.com";
  const options = {
    method: "GET",
    url: `${baseUrl}/properties/list`,
    params: {
      locationExternalIDs: "5002,6020",
      purpose: "for-rent",
      hitsPerPage: "25",
      priceMin: minPrice,
      priceMax: maxPrice,
    },
    headers: {
      "X-RapidAPI-Key": "f745072f70msh4afa46d5a37fb45p13b8a6jsn79315a545e0a",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  const getProperties = async () => {
    setLoading(true);
    const response = await axios.request(options);
    const data = response.data;

    setProperties(data.hits);
    setLoading(false);
    return data;
  };

  useEffect(() => {
    getProperties();
  }, [minPrice, maxPrice]);

  return (
    <>
      <form action="submit">
        <select
          name="minPrice"
          id="minPrice"
          onChange={(e) => setMinPrice(e.target.value)}
        >
          <option value={""} defaultValue>
            -- select min price --
          </option>
          <option value="7000">7000</option>
          <option value="9000">9000</option>
        </select>
        <select
          name="maxPrice"
          id="maxPrice"
          onChange={(e) => setMaxPrice(e.target.value)}
        >
          <option value={""} defaultValue>
            -- select max price --
          </option>
          <option value="15000">15000</option>
          <option value="25000">25000</option>
        </select>
      </form>
      {loading ? (
        <p style={{ color: "black" }}>Loading...</p>
      ) : (
        <PropertiesList properties={properties} />
      )}
    </>
  );
};

export default Test;
