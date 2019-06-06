import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Due from './components/due'
import Card from './components/card'
import CardButtonCombo from './components/cardbuttoncombo'
import Footer from './components/footer'

function App() {
  return (
    <div>
<Header></Header>
<Due></Due>
<CardButtonCombo />
<Footer></Footer>
</div>
  );
}

export default App;
