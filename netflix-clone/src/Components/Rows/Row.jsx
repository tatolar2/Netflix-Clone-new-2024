import React, { useEffect, useState } from "react";
import axios from "../Util/axios";
import "./Row.css";
import ReactPlayer from "react-player"; //// import YouTube from "react-youtube"; due to CORS error message reactplayer can be used as substitute to play youtube videos
import movieTrailer from "movie-trailer";

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchurl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const base_image = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_image}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && (
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerUrl}`}
            width="100%"
            height="390px"
            playing
            controls
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Row;
   

//note the below react js code is fine exept youtub video play error message
// import React, { useEffect, useState } from "react";
// import axios from "../Util/axios";
// import "./Row.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

// function Row({ title, fetchurl, isLargeRow }) {
//   const [movies, setMovies] = useState([]); //this to set all movies
//   const [trailerUrl, setTrailerUrl] = useState(""); // to play movies on click
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(
//       fetchurl
//       );
//       setMovies(request.data.results);
//       console.log(request.data.results);
//     }
//     fetchData();
//   }, [fetchurl]);
//   console.log(movies);
//   //
//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       // https://devloprs.google.com/youtub/player_parameters
//       autoplay: true,
//     },
//   };
//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.name || movie?.title || movie?.original_title)
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           // eg. https://www.youtube.com/watch?v=9O1Iy9od7-A
//           setTrailerUrl(urlParams.get("v"));
//           console.log(url);
//           console.log(urlParams);
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   const base_image = "https://image.tmdb.org/t/p/original/";
//   return (
//     // <<< title>>
//     // <<< fecht list of movies >>>

//     <div className="row">
//       <h2 className="title">{title}</h2>
//       <div className="row_posters">
//         {movies.map((movie) => (
//           <img
//             key={movie.id}
//             onClick={() => handleClick(movie)} // this method uses function to play movies
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//             src={`${base_image}${
//               isLargeRow ? movie.poster_path : movie.backdrop_path
//             }`}
//             alt={movie.name}
//           />
//         ))}
//         <div />
//       </div>
//       <div style={{ padding: "40px" }}>
//         {trailerUrl && <YouTube videoID={trailerUrl} opts={opts} />}
//       </div>
//     </div>
//   );
// }

// export default Row;
