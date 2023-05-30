import { useState } from 'react';
import './App.css'
import Column from './components/Column';

function App() {
  return (
    <div className='app'>
      <Column state="PLANNED" />
      <Column state="ONGOING" />
      <Column state="PLANNED" />
    </div>
  )
}

export default App
