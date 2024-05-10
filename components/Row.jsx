import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const rowRef = useRef(null);

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

  const scrollLeft = () => {
    if (rowRef.current) {
      const scrollAmount = 200;
      rowRef.current.scrollLeft -= scrollAmount;
      setScrollPosition(rowRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      const scrollAmount = 200;
      rowRef.current.scrollLeft += scrollAmount;
      setScrollPosition(rowRef.current.scrollLeft);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__container">
        <button className="row__scrollButton left" onClick={scrollLeft}>
          {"<"}
        </button>
        <div className="row__posters" ref={rowRef}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <button className="row__scrollButton right" onClick={scrollRight}>
          {">"}
        </button>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
