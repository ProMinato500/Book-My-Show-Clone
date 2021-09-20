import axios from "axios";
import React, {useState, useEffect} from "react";
import EntertainmentCardSlider from "../components/Entertainment/entertainmentcard.component"
import PosterSlider from "../components/PosterSlider/posterslider.component";

const HomePage = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);

    



    return (
        <>
        <div className="container mx-auto px-24 py-10">
            <PosterSlider images={popularMovies} title="Recommended Movies" isDark={false} />

        </div>
        <div className="flex flex-col gap-10">
        <div className="container mx-auto px-24">
            <h1 className="text-2xl font-bold text-gray-800 py-4 px-2">
                The best of Entertainment
            </h1>
        <EntertainmentCardSlider />
        </div>

        <div className="bg-navCol-200 px-24 py-4">
            
            <div className="container mx-auto px-4">
                <div className="flex">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
                />
                </div>
                <PosterSlider images={popularMovies} title="Premieres" subtitle="Brand New Releases Every Friday" isDark/>
            </div>
        </div>
        <div className="container mx-auto px-24 py-10">
            <PosterSlider images={popularMovies} title="Upcoming Movies" isDark={false} />

        </div>
        <div className="container mx-auto px-24 py-10">
            <PosterSlider images={popularMovies} title="Now Playing" isDark={false} />

        </div>
        <div className="container mx-auto px-24 py-10">
            <PosterSlider images={popularMovies} title="Top Rated" isDark={false} />

        </div>
        
        </div>
        </>
    );
};

export default HomePage;