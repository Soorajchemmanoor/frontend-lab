import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter';
import Navbar from './Navbar';


function App(){


  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-3xl font-bold underline'>This is my first component {1 + 1}</h1>
      <p className='bg-blue-500 text-white p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et debitis error enim nostrum!</p>
      <Counter />
    </> 
  )

}

export default App;