import React, { useState } from 'react';
import { useEffect } from 'react';
import InputForm from './components/InputForm';
import ResponseDisplay from './components/ResponseDisplay';

function App() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    document.title = "21BCE10646"; // replace with your roll number
  }, []);

  return (
    <div className="App">
      <InputForm setResponse={setResponse} />
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}



export default App;
