
function TouristPlaces({ img, name, description, season, rating, price }) {   

    return (
        <>
            <div className={`w-[300px] mx-auto px-4 sm:px-6 lg:px-3 py-3 rounded-lg shadow-md ${season === 'Winter' ? 'bg-red-50' : season === 'Summer' ? 'bg-green-50' : 'bg-white'} `} >
                <div className="relative">
                    <img className="w-full rounded-lg h-48 object-cover" src={img} alt="" />
                    <p className="absolute bottom-2 right-2 px-2 rounded-full bg-white font-10 ">₹{price}</p>
                    <p className={`absolute bottom-2 left-2 px-2 rounded-full  font-10 ${season === "Winter" ?  'bg-red-600 text-white' : season === "Summer" ? 'bg-green-600 text-white' : 'bg-white text-black'} `}>{season}</p>  
                    { price < 12000 ? <p className="absolute top-2 right-2 px-2 rounded-full bg-yellow-200 font-10 ">Cheaper</p> : <p className="absolute top-2 right-2 px-2  rounded-full bg-orange-200 font-10 ">Expensive</p> }
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h1 className="text-xl  font-bold text-green-800">{name}</h1>
                    <p className="text-yellow-800 font-semibold">Rating : {rating} </p>
                    
                </div>

                <p className="mt-2">{description}</p>
                <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={
                    () => alert(`You have selected ${name} as your tourist destination!`)
                }
                   >Explore</button>
            </div>
        </>
    );
}


export default TouristPlaces;