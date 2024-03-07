// CountrySelection.js
import React from 'react';

const CountrySelection = ({ selectedCountry, onCountryChange }) => {
  const countries = [
    { code: 'in', name: 'India' },
    { code: 'ca', name: 'Canada' },
    { code: 'us', name: 'United State' },
    { code: 'au', name: 'Australia' },
    { code: 'ua', name: 'Ukraine' }
    
    
  ];

  return (
    <div className='selection-container mt-3'>
      <label htmlFor="country" className='label'>Select Country: </label>
      <select id="country" value={selectedCountry} onChange={onCountryChange} className='dropdown'>
        <option value="">All</option>
        {countries.map((country, index) => (
          <option key={index} value={country.code}>{country.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CountrySelection;
