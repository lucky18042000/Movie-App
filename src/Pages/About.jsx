import React from "react";
import Navbar from "../Component/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <h1>About</h1>
        <p>
          This is a movie application where you can search and explore movies
          and also you can upload your favorite movies and share with others.{" "}
        </p>
        <p>
          The application is built using React, Redux and Router. It uses The
          Movie Database (TMDb) API to fetch movie data.{" "}
        </p>
      </div>
    </>
  );
}

export default About;
