import React, { useState } from 'react';
import { postData } from '../utils/api';

const RequestForm = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = JSON.parse(jsonInput);
      const result = await postData(data);
      setResponse(result);
    } catch (error) {
      alert('Invalid JSON');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Enter JSON"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RequestForm;
