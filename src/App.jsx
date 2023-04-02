import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    </div>
  )
}

export default App
