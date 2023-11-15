import React, { useState } from 'react';
import { FaHtml5, FaJava } from 'react-icons/fa6';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { MdModeEdit } from "react-icons/md";
const Skills = () => {
  const [inputValue, setInputValue] = useState('');
  const [showIcon, setShowIcon] = useState([]);
  const [uniqueIcons, setUniqueIcons] = useState(new Set());

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  const handleAddButtonClick = () => {
    const newIcons = getIconToShow();

    // Check if the icon is not already in the uniqueIcons set
    if (!uniqueIcons.has(inputValue)) {
      setUniqueIcons((prevSet) => new Set([...prevSet, inputValue]));
      setShowIcon((prevIcons) => [...prevIcons, ...newIcons]);
    }
  };

  const getIconToShow = () => {
    switch (inputValue) {
      case 'html':
        return [<FaHtml5 key="html" style={{ width: "45", height: "45" }} />];
      case 'css':
        return [<IoLogoCss3 key="css" style={{ width: "45", height: "45" }} />];
      case 'javascript':
        return [<IoLogoJavascript key="javascript" style={{ width: "45", height: "45" }} />];
      case 'reactjs':
        return [<GrReactjs key="reactjs" style={{ width: "45", height: "45" }} />];
      case 'java':
        return [<FaJava key="java" style={{ width: "45", height: "45" }} />];
      default:
        return [];
    }
  };

  return (
    <div>
      <h1>Skills</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type 'html', 'css', or 'javascript' here"
      />

      <button onClick={handleAddButtonClick}>Add</button>

      {showIcon.length > 0 && (
        <div className='d-flex justify-content-center m-5 align-items-center' >
          {showIcon.map((item, index) => (
            <div key={index} className='m-5'>
                
                {item}<MdModeEdit/> 
            </div>
          ))}
        </div>
      )}
      {/* Add more components or content as needed */}
    </div>
  );
};

export default Skills;
