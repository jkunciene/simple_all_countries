import React from 'react'

const Countries = (props) => {
   
   console.log(`countries komponente tikrinu propsus ${props.country}`);
   //returnina Object object
   //nes props'ai patys saves yra objektas, o duomenys taip pat objektas


  return (
    <div className='oneCountry'>
        <p>{props.country.name.common}</p>
        <img src={props.country.flags.png} alt={props.country.name.common} />
        
    </div>
  )
}

export default Countries