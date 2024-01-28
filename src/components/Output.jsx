import React from 'react';

export default function Display() {
  const handleClearData = () => {
    // tyhjennetään localstoragen data
    localStorage.removeItem('fuelData');

    // sivun päivitys jotta muutokset näkyy
    window.location.reload();
  };

  // haetaan data localstoragesta
  const data = JSON.parse(localStorage.getItem('fuelData')) || [];

  return (
    <div className="display">
      <h1>Listaus</h1>
      <ul>
        {data.map((record, index) => (
          <li key={index}>
            Litrat: {record.litres}&#44;&nbsp;
            Ajetut km: {record.kilometers}&#44;&nbsp;
            Hinta per litra: {record.price}
          </li>
        ))}
      </ul>
      <button onClick={handleClearData}>Tyhjennä tiedot</button>
    </div>
  );
}
