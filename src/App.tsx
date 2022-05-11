import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { GlobalStyle } from '@moneylion/mlds-web';
import './App.css';
import Agreement from './pages/Agreement';
import DOB from './pages/DOB';
import Personal from './pages/Personal';
import Welcome from './pages/Welcome';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>  
        <Routes>
          <Route path="/" element={ <Welcome /> } />
          <Route path="/personal" element={ <Personal /> } />
          <Route path="/dob" element={ <DOB /> } />
          <Route path="/agreement" element={ <Agreement /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;