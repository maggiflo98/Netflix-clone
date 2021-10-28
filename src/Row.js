import React,{useState,useEffect}from 'react'
import axios from "./axios";
import YouTube from 'react-youtube';
import movieTrailer  from "movie-trailer";
import  "./Row.css";

const base_url="https://image.tmdb.org/t/p/original/";
                // props from componennt
function Row({title,fetchUrl,isLargeRow}) {
const [movies,setMovies] =  useState([]);
const [trailerUrl,setTrailerUrl]=useState("");



// a snippet of code which runs on specific conditions
useEffect(() => {

    // if[] run once when the row loads,and dont run again
    async function fetchData(){
        const request  = await axios.get(fetchUrl);
        setMovies(request.data.results);
        // console.table(request.data.results);
        return request;
        

    }
    fetchData();

},[fetchUrl]);

const opts = {
    height: '300',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick=(movie)=>{
      if(trailerUrl){
          setTrailerUrl("");
      }
      else{
          movieTrailer(movie?.name || "")
          .then((url)=>{
                    const urlParams = new URLSearchParams(url).search;
                    setTrailerUrl(urlParams.get('v'));
          })
          .catch((error) => console.log (error));
      }
  };

console.table(movies);




        return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            <div className="row_posters">
                {/* several row_posters */}

                             {movies && movies.map(movie => (
                    <img key={movie.id} onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterlarge"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                ))} ;
                 </div>
              {trailerUrl && <  YouTube videoId={trailerUrl} opts={opts}/>}
                   </div>
    )
}

export default Row;
