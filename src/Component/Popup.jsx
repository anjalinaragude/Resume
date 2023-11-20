import React, { useState, useEffect, useRef } from 'react';

const Popup = () => {
  const [popupVisible, setPopupVisible] = useState(true);
  const[val,setVal]=useState("")
  const[add,setAdd]=useState([])
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Check if the clicked element is outside the popup
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        event.target.id !== 'toggleButton' &&
        event.target.id !== 'closeButton'
      ) {
        // Close the popup
        setPopupVisible(false);
      }
    };

    // Attach the event listener when the component mounts
    document.body.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const togglePopupVisibility = () => {
    // Toggle the visibility of the popup
    setPopupVisible(!popupVisible);
  };

  const handleCloseButtonClick = (event) => {
    // Prevent the click from triggering the outside click event
    event.stopPropagation();
    // Close the popup
    setPopupVisible(false);
  };

  const handleClick=()=>{
 setAdd([...add,val])
  }

  return (
    <div>
      <button id="toggleButton" onClick={togglePopupVisibility}>
        Toggle Popup
      </button>
      {popupVisible && (
        <div
          id="myPopup"
          ref={popupRef}
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <input style={{ margin: 0 }} value={val} onChange={(e)=>setVal(e.target.value)}></input>
          <button className="" onClick={handleClick}>add</button>
          <button id="closeButton" onClick={handleCloseButtonClick}>
            Close
          </button>
        </div>
      )}
      {add.map((item,index)=>{
        return(
            <div keys={index}>
                {item}
            </div>
        )
      })}
    </div>
  );
};

export default Popup;
