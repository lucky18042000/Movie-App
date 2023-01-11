import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import UploadMovies from "./Pages/UploadMovies";
import SearchMovies from "./Pages/SearchMovies";
import MovieDetail from "./Pages/MovieDetail";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/searchmovies" element={<SearchMovies />} />
          <Route path="/uploadmovies" element={<UploadMovies />} />
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
