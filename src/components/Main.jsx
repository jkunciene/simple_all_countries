import React, { useState, useEffect } from 'react';
import Countries from './Countries';

const Main = () => {
  //  kur saugosime gautus is API duomenis
    const [countries, setCountries] = useState('');

//pati duomenu gavimo funkcija
    const getCountriesData = () => { 
            fetch("https://restcountries.com/v3.1/all")
            .then(res  => res.json())
            .then(data => setCountries(data))
      };
      //pasitikrinu, ar rezultata uzsetinau i state
        console.log(countries);

      //kada iskviesti funkcija?
      //kada daryti requesta?

    useEffect(()=>{
        getCountriesData()
    }, []);

  return (
    <div className='allCountries'>
        {
            countries && countries.map((oneCountry, index)=>(
                <Countries country={oneCountry} key={index}/>
            ))
        }
        
    </div>
  )
}

export default Main