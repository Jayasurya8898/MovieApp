import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect,useState } from "react";
function Banner(){
    const [trendingMovies,setTrendingMovies]=useState(' ');
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346")
        .then(function(res){
            let randomovie=res.data.results[Math.floor(Math.random()*20)]
            setTrendingMovies(randomovie)
        })
    },[]);

    return(
        <div className="relative">
           <img className="h-[35rem] w-screen" 
           src={BASE_URL+trendingMovies.backdrop_path}/>
             <p className="absolute left-[50%] text-4xl bottom-4	left-4 text-white translate-x-[-50%]">
        {trendingMovies.title}
         </p>
        </div>
    )

}
export default Banner;