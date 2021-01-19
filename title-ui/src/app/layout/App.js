import React from 'react';
import {  Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../../features/common/NavBar';
import { Titles } from '../../features/Titles/TitlesList';

const App = (props)=> {

 
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container>
        <Titles></Titles>
      </Container>
    
    </div>
  );
}

export default App;
