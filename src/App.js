import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from "./components/NavBar"
//import NewTaskCreation from './components/NewTaskCreation';
//import { Component } from 'react';
import './App.css';
import NewTaskCreation from './components/NewTaskCreation';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='main-container'>
   <NavBar />
    <Router>
      <Routes>
          <Route exact path="/"  element={<HomePage/>} />
          <Route exact path="/NewTask" element={<NewTaskCreation/>} />
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
