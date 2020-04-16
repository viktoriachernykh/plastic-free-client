import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findCity } from "../../store/city/actions";

const selectCities = (reduxState) => {
  return reduxState.cities;
};

export default function SearchProductInput(props) {
  const dispatch = useDispatch();

  const cities = useSelector(selectCities);

  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [suggestions, showSuggestions] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === "" || city === "") {
      window.alert("fill both fields");
    } else {
      dispatch(props.findProduct(keyword, city));
    }
  };
  const chooseCity = (city) => {
    setCity(city);
    showSuggestions(false);
  };

  const onCityChange = (key) => {
    showSuggestions(true);
    setCity(key);
    key.length > 2 && dispatch(findCity(key));
  };

  return (
    <div>
      <h1>What product are you looking for?</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="keyword"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <input
          type="text"
          name="city"
          onChange={(e) => onCityChange(e.target.value)}
          value={city}
        />
        <ul>
          {suggestions &&
            cities.map((city, i) => {
              return (
                <li
                  className="suggestion"
                  key={i}
                  onClick={(e) => chooseCity(city.name)}
                >
                  {city.name}
                </li>
              );
            })}
        </ul>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
