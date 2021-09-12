import React from "react";

const MovieHero = () => {
    return (
        <>
        <div className="md:hidden">
            <img
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            />
        </div>

        <div className="hidden md:block lg:hidden">
            <img
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            />
        </div>

        <div className="hidden lg:block" style={{height: "35rem"}}>
            
            <div className="absolute inline-flex">
            <div className="absolute z-30 w-64 h-96 left-64 top-20 inline-flex">
                    
                <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
                alt="poster"
                className="w-full h-full rounded-xl"
                />
                
            </div>
            <div className="ml-10 text-2xl z-30 flex flex-col items-start left-64 top-32">
                    <h3>Shang-Chi and the Legend of the Ten Rings</h3>
                </div>
            </div>

            <div className="absolute h-full w-full z-10"
                style={{ height: "35rem", backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}
            />
                
            <img
            src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg"
            alt="poster"
            className="w-full h-full px-48 ml-48 bg-gray-700"          
            />
        </div>
        </>
    )
};

export default MovieHero