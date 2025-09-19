import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const countries = ({ countriesPromise }) => {
  let [visitedCountries, setVisitedCountries] = useState([]);
  let [visitedFlags, setVisitedFlags] = useState([]);
  let countriesData = use(countriesPromise);
  let handleVisitedCountries = (country) => {
    console.log("handle visited country clicked!", country);
    let newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  let handleVisitedFlag = (flag) => {
    let newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  let countries = countriesData.countries;

  return (
    <div>
      <h1>In the countries:{countries.length}</h1>
      <h3>Total Country Visited:{visitedCountries.length}</h3>
      <h3>Total Flags Visited:{visitedFlags.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      {/* <div>
        {visitedFlags.map((flag) => (
          <img src={flag}></img>
        ))}
      </div> */}
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default countries;
