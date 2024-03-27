import React, { useState, useRef } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Section from './Section';
import './App.css';

function App() {

  return (
    <div className='container'>
      <Header route={'/'}/>
      <Section>
        <Home />
      </Section>
    </div>
  );
}

export default App;

