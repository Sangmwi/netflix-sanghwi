import { useState } from "react";
import notflixLogo from "./assets/notflix.svg";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage/MovieDetailPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
//홈페이지 /
//영화 전체 보여주는 페이지(서치) /movies
//영화 상세 페이지 /movies/:id
//추천영화 /movies/:id/recommendations
//리뷰 /movies/:id/reviews

function App() {


  return (
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies">
            <Route index element={<MoviesPage />} />
            <Route path=":id">
              <Route index element={<MovieDetailPage />} />
              {/* <Route path='recommendations' element={<MovieRecommendationsPage />} />
            <Route path='reviews' element={<MovieReviewsPage />} /> */}
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
