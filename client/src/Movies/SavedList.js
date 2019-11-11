import React from "react";
import { NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink key={movie.id} activeClassName="active" to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}

    <NavLink exact to="/" activeClassName="active">
      <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
