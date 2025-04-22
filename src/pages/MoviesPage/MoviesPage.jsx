import React from "react";
import "./MoviesPage.style.css";
import SidebarComponent from "./components/Sidebar/SidebarComponent";

const MoviesPage = () => {
  return (
    <div className="movies-page-container">
        <SidebarComponent />
      <div className="movies-list-container">
        <h1>Movies list</h1>
      </div>
    </div>
  );
};

export default MoviesPage;
