import React from 'react';
import './App.css';
// import Wrapper from './views/Wrapper'
import Nav from './views/Nav'
import Footer from './components/common/Footer'
import Path from './views/'
// import HomePage from './views/HomePage'
import { Route } from 'react-router-dom'

const App = () => (
  <>
    <Route path="*"><Nav /></Route>
    <Path />
    <Route path="*"><Footer /></Route>
  </>
)


export default App;
