import React, { useState, useEffect } from "react";
import axios from "./axios";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"; //no componenet for this
import { FaChevronCircleLeft,FaChevronCircleRight  } from "react-icons/fa";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const scroll = (rowId, scrollDistance) => {
    const rowPosters = document.getElementById(rowId);
    rowPosters.scrollLeft += scrollDistance;
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <FaChevronCircleLeft onClick={() => scroll(title, -200)} size={40} className="chevron_buttons_left"/>
      <div id={title} className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      <FaChevronCircleRight onClick={() => scroll(title, 200)} size={40} className="chevron_buttons_right"/>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
