
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App(){

  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<p className='bg-blue-500 text-white p-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et debitis error enim nostrum!</p>} />
      </Routes>
     
      
     
    </> 
  )

}

export default App;