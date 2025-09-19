import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  console.log(country.area.area);
  let handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  let [visited, setVisited] = useState(false);
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <div>
        <img src={country?.flags?.flags?.png} alt="" />{" "}
      </div>
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area:{country.area.area}
        {country.area.area > 300000 ? "Big country" : "Small country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        onClick={() => {
          handleVisitedFlag();
        }}
      >
        Add Visited Flag:{}
      </button>
    </div>
  );
};

export default Country;

<h3>Name: </h3>;
