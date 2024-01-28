import React, { useState } from 'react';

export default function Input() {
  const [litres, setLitres] = useState('');
  const [kilometers, setKilometers] = useState('');
  const [price, setPrice] = useState('');

  {/*tehdään tapahtumakäsittelijä*/}
  const handleSubmit = (e) => {
    e.preventDefault();

    {/*uusi data laitetaan vanhan datan jatkoksi*/}
    const newData = {
      litres: litres,
      kilometers: kilometers,
      price: price
    };

    // haetaan olemassaoleva data localstoragesta
    const existingData = JSON.parse(localStorage.getItem('fuelData')) || [];

    // lisätään data perään
    existingData.push(newData);

    // tallennetaan data takaisin localstorageen
    localStorage.setItem('fuelData', JSON.stringify(existingData));

    // tyhjennetään lomakkeen kentät
    setLitres('');
    setKilometers('');
    setPrice('');
  };

  return (
    <div className="input">
      <h1>Syöttö</h1>
      <form name="inputs" onSubmit={handleSubmit}>
        <label>Litrat</label><br />
        <input type="text" name="litres" value={litres} onChange={(e) => setLitres(e.target.value)} /><br />

        <label>Ajetut km</label><br />
        <input type="text" name="kilometers" value={kilometers} onChange={(e) => setKilometers(e.target.value)} /><br />

        <label>Hinta per litra</label><br />
        <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} /><br />

        <button type="submit">syötä</button>
      </form>
    </div>
  );
}
