import React, { useState } from 'react';

function InputForm({ setResponse }) {
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backend-test1-shashwath.onrender.com/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: JSON.parse(input).data })
      });
      const data = await response.json();
      console.log(data)
      setResponse(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON input...'
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
