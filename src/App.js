import React, { useState } from 'react';
import {  Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Link, Switch } from 'react-router-dom';
import RoutesPath from './RoutesPath';
// import About from './pages/Results';

import WordGenerator from './components/WordGenerator';

function App() {

  return (
    <RoutesPath/>
  );
}

export default App;
