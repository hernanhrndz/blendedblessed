// import logo from './logo.svg';
// import './App.css';

import './index.css';
// import React from "react"

import { Header } from './components/Header'
import { Banner } from './components/Banner';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Banner />
      <Home />
      <Footer />
    </>

  );
}