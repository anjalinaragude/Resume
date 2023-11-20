import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interest from './pages/Interest';
import Header from './Component/Header';
import SkillTracker from './Component/DisplayPage';
import DisplayPage from './Component/DisplayPage';
import Popup from './Component/Popup';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
     
      <Route path='/' element={<Home/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/skill' element={<Skills/>}></Route>
      <Route path='/interest' element={<Interest/>}></Route>
      <Route path='/popup' element={<Popup/>}></Route>
      
      
      
      
      
      </Routes>
     
      <Header/>
      {/* <DisplayPage/> */}
      {/* <Popup/> */}

      </BrowserRouter>
      
    </div>
  );
}

export default App;
