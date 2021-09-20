import React from "react";
import MovieHero from "../components/MovieHero/moviehero.component";

const Movie = () => {
    return (
    <>
    <MovieHero />
    <div className="my-12 container px-4 lg:w-3/5 lg:ml-28">
        <div className="flex flex-col items-start gap-3">
            <h2 className="text-gray-800 font-bold text-2xl">
            About The Movie
            </h2>
            <p >
            Shang-Chi and The Legend of The Ten Rings features Simu Liu as Shang-Chi, who must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization. The film is directed by Destin Daniel Cretton and produced by Kevin Feige and Jonathan Schwartz.
            </p>
        </div>
        <div className="my-8">
            <hr />
        </div>
        <div>
            <h1>Applicable offers</h1>
            <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
            <div className="w-10 h-10">
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" className="w-full h-3/4"/>
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-gray-800 text-xl">Filmy Pass</h3>
                <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
            </div>
            </div>
        </div>
        <div className="my-8">
            <hr />
        </div>
        <div>
            <h3 className="text-2xl font-bold">Cast</h3>
            <div className="mt-5 inline-flex gap-10">
                <div>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/simu-liu-2006167-13-05-2021-04-13-21.jpg" className="rounded-full w-32 h-32"/>
                <p className="w-32 text-center text-xl">Simu Liu</p>
                <p className="w-32 text-center text-gray-600 text-sm">as Shang-Chi</p>
                </div>
                <div>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/awkwafina-1093500-20-06-2018-12-05-44.jpg" className="rounded-full w-32 h-32"/>
                <p className="w-32 text-center text-xl">Awkwafina</p>
                <p className="w-32 text-center text-gray-600 text-sm">as Katy</p>
                </div>
                <div>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/tony-leung-iein105711-02-04-2018-13-07-58.jpg" className="rounded-full w-32 h-32"/>
                <p className="w-32 text-center text-xl">Tony Leung Chiu-wai</p>
                <p className="w-32 text-center text-gray-600 text-sm">as Wenwu/The Mandarin</p>
                </div>
                <div>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/michelle-yeoh-1473-24-03-2017-17-32-23.jpg" className="rounded-full w-32 h-32"/>
                <p className="w-32 text-center text-xl">Michelle Yeoh</p>
                <p className="w-32 text-center text-gray-600 text-sm">as Jiang Nan</p>
                </div>
            </div>
        </div>
        <div className="my-8">
            <hr />
        </div>
        <div>
            <h3 className="text-2xl font-bold">Crew</h3>
            <div className="mt-5 inline-flex gap-10">
                <div>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/destin-cretton-1076480-15-01-2020-01-11-15.jpg" className="rounded-full w-32 h-32"/>
                <p className="w-32 text-center text-xl">Destin Cretton</p>
                <p className="w-32 text-center text-gray-600 text-sm">Director</p>
                </div>
                <div>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/kevin-feige-1092082-18-04-2018-14-44-54.jpg" className="rounded-full w-32 h-32"/>
                <p className="w-32 text-center text-xl">Kevin Feige</p>
                <p className="w-32 text-center text-gray-600 text-sm">Producer</p>
                </div>
                <div>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/jonathan-schwartz-1264076-01-03-2019-07-51-58.jpg" className="rounded-full w-32 h-32"/>
                <p className="w-32 text-center text-xl">Jonathan Schwartz</p>
                <p className="w-32 text-center text-gray-600 text-sm">Producer</p>
                </div>
                <div>
                <img src="https://in.bmscdn.com/iedb/artist/images/website/poster/large/bill-pope-iein005277-24-03-2017-13-02-34.jpg" className="rounded-full w-32 h-32"/>
                <p className="w-32 text-center text-xl">Bill Pope</p>
                <p className="w-32 text-center text-gray-600 text-sm">Cinematographer</p>
                </div>
            </div>
        </div>

    </div>
    </>
    );
};

export default Movie;