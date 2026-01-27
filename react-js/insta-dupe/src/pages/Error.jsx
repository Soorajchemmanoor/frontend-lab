function Error() {   
    return (
        <>
            <div className="p-4 h-[85vh] flex flex-col justify-center items-center ">
                <h1 className='text-[200px] font-bold text-red-600 mb-1'>404 </h1>
                <h1 className='text-3xl font-bold text-red-600 mt-1'> Page Not Found</h1>
                <p className='text-gray-500'>The page you are looking for does not exist.</p>   
            </div>
            
        </>
    )
}   
export default Error;