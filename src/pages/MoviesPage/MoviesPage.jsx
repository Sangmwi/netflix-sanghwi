import React, { useState, useEffect } from "react";
import "./MoviesPage.style.css";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import { useSearchMovie } from "@/hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import MovieCard from "@/common/MovieCard/MovieCard";
import { Container, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import PagenationComponent from "./components/PagenationComponent/PagenationComponent";
import NoContent from "./components/NoContent/NoContent";
import { useGenreStore, useSortStore } from "@/store/useFilterStore";


const MoviesPage = () => {
  const [lastValidTotalPages, setLastValidTotalPages] = useState(5);


  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("q") || "";
  const page = searchParams.get("page") || 1;


  const { selectedGenre } = useGenreStore();  
  const { sort } = useSortStore();

  const { data, isLoading, isError, error } = useSearchMovie({
    searchQuery,
    page,
    selectedGenre,
    sort,
  });

  //장르나 sort 변경시 페이지 초기화
  useEffect(() => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("page", "1");
      return newParams;
    });
  }, [selectedGenre, sort]);

  useEffect(() => {
    if (data?.total_pages && data?.total_pages > 500) {
      setLastValidTotalPages(500);
    } else if (data?.total_pages && data?.total_pages <= 500) {
      setLastValidTotalPages(data.total_pages);
    }
  }, [data?.total_pages]);

  const searchedMovies = data ? data.results : [];
  console.log("받아온 검색 데이터", data);
  console.log("검색된 영화", searchedMovies);

  return (
    <div
      className="movie-page"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${searchedMovies[0]?.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="d-flex flex-column gap-1 movie-page-container">
        <Row className="movie-page-header">
          <Col lg={12} xs={12}>
            <div className="movie-page-header-box">
              <h1 className="movie-page-header-title">Movies</h1>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={2} xs={12} className="movie-page-sidebar">
            <SidebarComponent />
          </Col>
          <Col md={10} xs={12} className="movie-list-container">
            <Row
              className="g-2 justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              {isLoading ? (
                <div className="movie-page-loading d-flex justify-content-center align-items-center">
                  <CircularProgress size={80} color="error" />
                </div>
              ) : isError ? (
                <div className="movie-page-error text-danger text-center">
                  Error: {error.message}
                </div>
              ) : searchedMovies.length === 0 ? (
                <div className="movie-page-empty">
                  <NoContent />
                </div>
              ) : (
                searchedMovies
                  .filter((movie) => movie.poster_path)
                  .map((movie) => (
                    <Col key={movie.id} xxl={2} lg={3} sm={4} xs={6}>
                      <MovieCard movie={movie} />
                    </Col>
                  ))
              )}
            </Row>

            <Row>
              <Col>
                <PagenationComponent
                  page={page}
                  count={lastValidTotalPages}
                  setSearchParams={setSearchParams}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoviesPage;
