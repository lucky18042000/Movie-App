import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";

function MovieDetail() {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d5fe827d77d125eca81f49030e90ce85&language=en-US`)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);

    }, [id]);

    if (isLoading) {
        return (<><Navbar /><div>Loading...</div></>);
    }

    return (
        <>
            <Navbar />
            <div className="movie-detail">
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <div className="movie-detail-meta">
                    <div>
                        <strong>Release date:</strong> {movie.release_date}
                    </div>
                    <div>
                        <strong>Runtime:</strong> {movie.runtime} min
                    </div>
                </div>
            </div>
        </>
    );
}


export default MovieDetail;
