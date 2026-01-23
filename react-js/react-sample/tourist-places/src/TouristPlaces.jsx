
function TouristPlaces({ img, name, description, season, rating, price }) {   

    return (
        <>
            <div className="w-[300px] mx-auto px-4 sm:px-6 lg:px-3 py-3 bg-green-100 rounded-lg shadow-md">
                <div className="relative">
                    <img className="w-full rounded-lg h-48 object-cover" src={img} alt="" />
                    <p className="absolute bottom-2 right-2 px-2 rounded-full bg-white font-10 ">₹{price}</p>
                    {season === "Winter" ? <p className="absolute bottom-2 left-2 px-2 rounded-full bg-red-500 text-white font-10 ">Best time: Winter</p> : <p className="absolute bottom-2 left-2 p-0 px-2  rounded-full bg-green-600 text-white font-10 ">Best time: Summer</p> }
                    { price < 12000 ? <p className="absolute top-2 right-2 px-2 rounded-full bg-yellow-200 font-10 ">Cheaper</p> : <p className="absolute top-2 right-2 px-2  rounded-full bg-orange-200 font-10 ">Expensive</p> }
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h1 className="text-xl  font-bold text-green-800">{name}</h1>
                    <p className="text-yellow-800 font-semibold">Rating : {rating} </p>
                    
                </div>

                <p className="mt-2">{description}</p>
            </div>
        </>
    );
}


export default TouristPlaces;