import React, { useState } from 'react';

const Home = () => {
  const [about, setAbout] = useState('');
  const [add, setAdd] = useState(["Hi, I am Anjali"]);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
    if (editIndex !== null) {
      // If editIndex is not null, update the existing item
      const updatedAdd = [...add];
      updatedAdd[editIndex] = about;
      setAdd(updatedAdd);
      setEditIndex(null);
    } else {
      // If editIndex is null, add a new item
      setAdd([...add, about]);
    }

    setAbout('');
  };

  const handleEdit = (index) => {
    // Set the text of the textarea to be edited
    setAbout(add[index]);
    // Set the index to indicate that we are in edit mode
    setEditIndex(index);
  };

  console.log(add);

  return (
    <div>
      <h5>About</h5>
      <textarea
        placeholder='about yourself'
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />

      <button onClick={handleClick}>{editIndex !== null ? 'Update' : 'Add'}</button>
      {add.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
