import './App.css';
import React from 'react';
import {Navigation, Icon} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import Container from './Component/Container/Container';
import Header from './Component/Container/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Container/>   
      
     </div>
    </BrowserRouter>
  );
}

export default App;
