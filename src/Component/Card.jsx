import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function Card(props) {
  
  return (
    <div className="">
      <Link to={`/moviedetail/${props.id}`}>
      <div className="cards">
        <img
          className="cards__img"
          src={`https://image.tmdb.org/t/p/original${
            props ? props.poster_path : "loading"
          }`}
        />
        <div className="cards__overlay">
          <div className="card__title">{props ? props.original_title : ""}</div>
          <div className="card__runtime">
            {props ? props.release_date : ""}
            <span className="card__rating">
              {props ? props.vote_average : ""}
              <i className="fas fa-star" />
            </span>
          </div>
          <div className="card__description">
            {props ? props.overview.slice(0, 118) + "..." : ""}
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Card;
