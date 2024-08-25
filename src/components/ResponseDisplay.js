import React, { useState } from 'react';

function ResponseDisplay({ response }) {
  const [filter, setFilter] = useState([]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter((prev) => 
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div>
      <h2>Response:</h2>
      <label>
        <input type="checkbox" value="alphabets" onChange={handleFilterChange} /> Alphabets
      </label>
      <label>
        <input type="checkbox" value="numbers" onChange={handleFilterChange} /> Numbers
      </label>
      <label>
        <input type="checkbox" value="highest_lowercase_alphabet" onChange={handleFilterChange} /> Highest Lowercase Alphabet
      </label>
      <label>
        <input type="checkbox" value="email" onChange={handleFilterChange} /> Email
      </label>
      <div>
        {filter.includes('alphabets') && <p>Alphabets: {response.alphabets.join(', ')}</p>}
        {filter.includes('numbers') && <p>Numbers: {response.numbers.join(', ')}</p>}
        {filter.includes('highest_lowercase_alphabet') && <p>Highest Lowercase Alphabet: {response.highest_lowercase_alphabet.join(', ')}</p>}
        {filter.includes('email') && <p>Email: {response.email}</p>}
      </div>
    </div>
  );
}

export default ResponseDisplay;
