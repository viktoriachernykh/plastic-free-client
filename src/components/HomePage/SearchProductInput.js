import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findCity } from "../../store/city/actions";
import { renewPage } from "../../store/city/actions";

const selectCities = (reduxState) => {
  return reduxState.cities;
};

export default function SearchProductInput(props) {
  const dispatch = useDispatch();

  const cities = useSelector(selectCities);

  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [suggestions, showSuggestions] = useState(true);

  useEffect(() => {
    dispatch(renewPage());
  }, []);

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
      <h1>All plastic-free products in your city</h1>
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
        <button className="search" type="submit">
          Search
        </button>
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
      </form>
    </div>
  );
}
