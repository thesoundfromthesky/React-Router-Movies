import React, { useState } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import "./stylesheet.css";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <BrowserRouter>
      <div>
        <SavedList list={savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={props => <Movie {...props} />} />
      </div>
    </BrowserRouter>
  );
};

export default App;
