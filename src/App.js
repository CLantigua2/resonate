import React from 'react';
import './App.css';
import Wrapper from './views/Wrapper'
import Nav from './views/Nav'
import HomePage from './views/HomePage'

const App = () => (
  <>
    <Nav />
    <Wrapper>
      <HomePage />
    </Wrapper>
  </>
)


export default App;
