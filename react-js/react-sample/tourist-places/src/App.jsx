import React from 'react';
import touristPlaces from './Data.jsx';
import TouristPlaces from './TouristPlaces.jsx';


function App() {
  return (
    <>
      <h1 className='text-4xl font-bold underline text-center my-4 text-green-700'>Tourist Places in India</h1>
        <div className='flex gap-2 justify-items-start flex-wrap my-2 mx-auto w-[90%]'>
            {touristPlaces.map((place) => (
                <TouristPlaces 
                  img = {place.img}
                  name = {place.placeName}
                  description = {place.desc}
                  season = {place.whenToVisit}
                  rating = {place.ratings}
                  price = {place.price}
                  
                />
            ))} 
        </div>
        
      
    </>
  )
}

export default App;