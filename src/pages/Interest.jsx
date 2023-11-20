import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Interest= () => {
  const [interestList, setInterestList] = useState([]);
  const [interest, setInterest] = useState('');

  const handleAddInterest = () => {
    if (interest) {
      const newInterest = {
        id: Date.now(), // Using timestamp as a unique ID
        interest,
      };

      setInterestList((prevList) => [...prevList, newInterest]);
      setInterest('');
    } else {
      alert('Please fill out the interest field.');
    }
  };

  const handleEditInterest = (id) => {
    const selectedInterest = interestList.find((interest) => interest.id === id);
    if (selectedInterest) {
      setInterest(selectedInterest.interest);
      handleDeleteInterest(id);
    }
  };

  const handleDeleteInterest = (id) => {
    setInterestList((prevList) => prevList.filter((interest) => interest.id !== id));
  };

  return (
    <div>
      <h1>Interest Form</h1>
      <div>
        <label>Interest:</label>
        <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />
      </div>
      <button onClick={handleAddInterest}>Add Interest</button>

      {interestList.length > 0 && (
        <div>
          <h2>Interest Entries</h2>
          <ul>
            {interestList.map((interest) => (
              <li key={interest.id}>
                {interest.interest}
                <FaEdit
                  onClick={() => handleEditInterest(interest.id)}
                  style={{ marginLeft: 10, cursor: 'pointer' }}
                />
                <FaTrash
                  onClick={() => handleDeleteInterest(interest.id)}
                  style={{ marginLeft: 5, cursor: 'pointer' }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Interest;
