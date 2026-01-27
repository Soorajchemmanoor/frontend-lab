import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Error from './pages/Error';
import Requests from './pages/Requests';
import UserDetails from './pages/UserDetails';
import Post from './pages/Post';


function App(){

  return (
    <>

      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/requests' element={<Requests />} />
          <Route path='/profile/:username' element={<UserDetails />} />
          <Route path='/profile/:username/post/:id' element={<Post />} />
          <Route path='*' element={<Error />} />    
      </Routes>
      <Footer />
      
     
    </> 
  )   
}
export default App;