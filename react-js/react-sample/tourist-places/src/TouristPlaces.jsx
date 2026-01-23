function TouristPlaces(){   

    return (
        <>
            <div className="w-[300px] mx-auto px-4 sm:px-6 lg:px-3 py-3 bg-green-100 rounded-lg shadow-md">
                <div className="relative">
                    <img className="w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8fDB8fHww" alt="" />
                    <p className="absolute bottom-2 right-2 px-2 rounded-full bg-white font-10 ">₹10,000</p>
                    <p className="absolute bottom-2 left-2 px-2 rounded-full bg-white font-10 ">Winter</p>
                    <p className="absolute top-2 right-2 px-2 rounded-full bg-white font-10 ">Expensive</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <h1 className="text-xl  font-bold text-green-800">Manali</h1>
                    <p className="text-yellow-800 font-semibold">Rating : 4.7 </p>
                    
                </div>
                
                <p className="mt-2">A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.</p>
            </div>
        </>
    );
}


export default TouristPlaces;