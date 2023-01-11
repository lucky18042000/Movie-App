import React, { useState, useEffect } from "react";
import Navbar from "../Component/Navbar";
import Card from "../Component/Card";
import data from "../data";
import { saveAs } from 'file-saver';


function SearchMovies() {
  const [query, setQuery] = useState("");
 
  const [movies, setMovies] = useState([]);
  const handleSubmit = e => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=d5fe827d77d125eca81f49030e90ce85&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(res => res.json())
      .then(newData => {
        setMovies(prevData => [...newData.results]);
        
      });
  };
  

  // const searchMovies = async (e) => {
  //   e.preventDefault();

  //   // const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;

  //   // try {
  //   //     const res = await fetch(url);
  //   //     const data  = await res.json();
  //   //     setMovies(data.results);
  //   // }catch(err){
  //   //     console.error(err);
  //   // }
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`)
  //     .then((res) => res.json())
  //     .then((newData) => {
  //       if (!Array.isArray(newData)) newData = Array.from(newData);
  //       setMovies(prevData => prevData.concat(newData));
  //     });
  // };
  const cards = movies.map((item) => {
    return <Card key={item.id} {...item} id={item.id} />;
  });
  return (
    <div className="searchmovies">
      <Navbar />
      <form className="form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="home-cards">{cards}</div>
      {/* <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />

                    </div>
                ))}
            </div>    */}
    </div>
  );
}

export default SearchMovies;
