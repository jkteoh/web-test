import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Agreement from './pages/Agreement';
import DOB from './pages/DOB';
import Personal from './pages/Personal';
import Welcome from './pages/Welcome';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(30,186,186,1)',
      dark: 'rgba(22,171,171,1)',
      contrastText: '#fff',
    }
  }
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>  
          <Routes>
            <Route path="/" element={ <Welcome /> } />
            <Route path="/personal" element={ <Personal /> } />
            <Route path="/dob" element={ <DOB /> } />
            <Route path="/agreement" element={ <Agreement /> } />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;