import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [graduationYear, setGraduationYear] = useState('');

  const handleAddEducation = () => {
    if (school && degree && graduationYear.match(/^\d{4}$/) && graduationYear <= new Date().getFullYear()) {
      const newEducation = {
        id: Date.now(), // Using timestamp as a unique ID
        school,
        degree,
        graduationYear,
      };

      setEducationList((prevList) => [...prevList, newEducation]);
      setSchool('');
      setDegree('');
      setGraduationYear('');
    } else {
      alert('Please fill out all fields with a valid graduation year.');
    }
  };

  const handleEditEducation = (id) => {
    const selectedEducation = educationList.find((education) => education.id === id);
    if (selectedEducation) {
      setSchool(selectedEducation.school);
      setDegree(selectedEducation.degree);
      setGraduationYear(selectedEducation.graduationYear);
      handleDeleteEducation(id);
    }
  };

  const handleDeleteEducation = (id) => {
    setEducationList((prevList) => prevList.filter((education) => education.id !== id));
  };

  return (
    <div>
      <h1>Education Form</h1>
      <div>
        <label>School:</label>
        <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />
      </div>
      <div>
        <label>Degree:</label>
        <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
      </div>
      <div>
        <label>Graduation Year:</label>
        <input
          type="text"
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
        />
      </div>
      <button onClick={handleAddEducation}>Add Education</button>

      {educationList.length > 0 && (
        <div>
          <h2>Education Entries</h2>
          <ul>
            {educationList.map((education) => (
              <li key={education.id}>
                <strong>{education.school}</strong>, {education.degree} (Graduation Year:{' '}
                {education.graduationYear})
                <FaEdit onClick={() => handleEditEducation(education.id)} style={{ marginLeft: 10, cursor: 'pointer' }} />
                <FaTrash onClick={() => handleDeleteEducation(education.id)} style={{ marginLeft: 5, cursor: 'pointer' }} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Education;
