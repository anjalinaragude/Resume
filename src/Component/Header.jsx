import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      
<div  className=''>
      <div className='row'>
        
        <div className='col-sm-6 col-md-3  ' >
            <div className='bg-danger text-black  ' style={{height:"100vh"}}>
   <div className='d-flex flex-column justify-content-center align-items-center h-50 m-0  '>
    <img src="assets/profile2.jpg"  width ={100} height={100} alt="" className="rounded-pill my-5  " />
    <ul className="">
   <Link to='/'> <li className="my-2 text-black fs-4  list-group-item " >About</li></Link>
   <Link to='/experience'>  <li className="my-2 text-black fs-4 list-group-item">Experience</li></Link>
   <Link to='/education'> <li className="my-2 text-black fs-4 list-group-item">Education</li></Link>
   <Link to='/skill'>  <li className="my-2 text-black fs-4 list-group-item">Skills</li></Link>
   <Link to='/interest'>   <li className="my-2 text-black fs-4 list-group-item">Interests</li></Link>
   </ul>
    </div>
   
   </div>
        </div>


        <div className='col-sm-6 col-md-9 '></div>
      </div>
      </div>

    </div>
  );
}

export default Header;
