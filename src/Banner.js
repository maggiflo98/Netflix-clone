import React,{useState,useEffect} from 'react';
import axios from "./axios";
import requests  from "./requests";

function Banner() {
    const [movie,setMovie]  = useState([]);

    useEffect(() => {
       async function fetchData(){
           const request=await axios.get(requests.fetchNetflixOriginals)
           setMovie(
               request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
           );
           return  request;
        //    console.log(request.data.resultsflo[Math.or(Math.random()*request.data.results.length-1)])

       }
       fetchData();
    }, []);
    return (
        <header className="banner">
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center",
            }}
                    <div className="banner_contents">
                    {/* title */}
                    {/* buttons */}
                     {/* descrption */}
                <h1></h1>
            </div>

            
        </header>
    );
}

export default Banner