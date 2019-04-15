import React from 'react';
import './App.css';
import Wrapper from './views/Wrapper'
import Nav from './views/Nav'
import HomePage from './views/HomePage'
import Footer from './components/common/Footer'

const App = () => (
  <>
    <Nav />
    <Wrapper>
      <HomePage />
    </Wrapper>
    <Footer />
  </>
)


export default App;
