const API_KEY = "d50b45c5a085851bcce5d4882ef38998";


const requests ={
   fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies:`/dicover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/dicover/movie?api_key=${API_KEY}&with_genres=99`,




         


}

export default requests;