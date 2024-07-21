import React, { useState, useEffect } from "react";
import axios from "../Utility/axios";
import requests from "../Utility/requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflexOrginals);
      const randomIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      console.log(response.data.results);
      setMovie(response.data.results[randomIndex]);
    }
    fetchData();
  }, []);

  // console.log(movie);

  const base_image = "https://image.tmdb.org/t/p/original/";
  // truncate function method used to limit string/text, include it on banner description wrapper
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "...." : string;
  }
  return (
    // <<< backround image>>>
    //     // <<< title>>
    //     // <<< two buttons>>>
    //     // <<< discriptions>>>
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_image}${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
      </div>
      <div>
        <button className="banner_button"> Play </button>
        <button className="banner_button"> My List </button>
      </div>
      <div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="Banner_fadebottom"></div>
    </div>
  );
}

export default Banner;
