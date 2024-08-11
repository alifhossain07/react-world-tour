import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/country";
import './countries.css'
const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));


    },[]);

    const handleVisitedCountry = country => {
        console.log("add this to visited countries");    
        
        console.log(country);
    
    
    }

    return (
        <div>
           <h3>Countries: {countries.length}</h3> 
           <h5>Visited Countries </h5>
           <ul>


           </ul>
           <div  className="country-container">
           {
            countries.map(country => 
            <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry}></Country>)

          }
           </div>
          

        </div>
    );
};

export default Countries;