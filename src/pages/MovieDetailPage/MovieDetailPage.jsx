import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetail, useMovieReviews, useMovieTrailer } from "@/hooks/useMovieDetail";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Card, CardContent, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "./MovieDetailPage.style.css";
import { Box, CircularProgress } from "@mui/material";

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data: movieDetail, isLoading, isError, error } = useMovieDetail(id);
  const {
    data: movieReviews,
    isLoading: isLoadingReviews,
    isError: isErrorReviews,
    error: errorReviews,
  } = useMovieReviews(id);
  const {
    data: movieTrailer,
    isLoading: isLoadingTrailer,
    isError: isErrorTrailer,
    error: errorTrailer,
  } = useMovieTrailer(id);

  if (isLoading)
    return (
      <div className="movie-detail-page-loading">
        <CircularProgress size={80} color="error" />
      </div>
    );
  if (isError)
    return (
      <div className="movie-detail-page-error">Error: {error.message}</div>
    );

  return (
    <Container
      className="movie-detail-page"
      fluid
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetail?.poster_path})`,
      }}
    >
      <div className="overlay"></div>
      <Box className="movie-detail-page-container">
        <Row className="movie-detail-header">
          <Col md={5} className="movie-poster-container">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${movieDetail?.poster_path}`}
              alt={movieDetail?.title}
            />
          </Col>
          <Col md={7} className="movie-info">
            <Typography variant="h2" component="h1" gutterBottom>
              {movieDetail?.title}
            </Typography>

            <Typography variant="h6" gutterBottom>
              <strong>
                <StarIcon color="warning" />
              </strong>{" "}
              {movieDetail?.vote_average
                ? movieDetail?.vote_average
                : "정보 없음"}{" "}
              / 10
            </Typography>

            <Typography variant="h6" gutterBottom>
              <strong>장르:</strong>{" "}
              {movieDetail?.genres?.map((genre) => genre.name).join(", ")}
            </Typography>

            <Typography variant="h6" gutterBottom>
              <strong>연령:</strong>{" "}
              {movieDetail?.adult ? "성인" : "전체 이용가"}
            </Typography>

            <Typography variant="h6" gutterBottom>
              <strong>개봉일:</strong>{" "}
              {movieDetail?.release_date
                ? movieDetail?.release_date
                : "정보 없음"}
            </Typography>

            <hr />
            <Button
              variant="contained"
              color="error"
              href={movieDetail?.homepage ? movieDetail?.homepage : "/notfound"}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              공홈 바로가기
            </Button>
          </Col>
        </Row>
        <Row className="movie-detail-content">
          <Col>
            <Card className="card">
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  <strong>줄거리:</strong>{" "}
                  {movieDetail?.overview
                    ? movieDetail?.overview
                    : "줄거리 정보 없음"}
                </Typography>
                <hr />
                <Typography variant="body1" gutterBottom>
                  <strong>출연진:</strong>{" "}
                  {movieDetail?.credits?.cast &&
                  movieDetail?.credits?.cast.length > 0
                    ? movieDetail?.credits?.cast
                        .slice(0, 5)
                        .map((cast) => cast.name)
                        .join(", ") +
                      " 외 " +
                      (movieDetail?.credits?.cast.length - 5) +
                      "명"
                    : "출연진 정보 없음"}
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>

        {/* 리뷰 */}
        {movieReviews && movieReviews.results.length > 0 && (
          <Row className="movie-detail-content">
            <Col className="movie-detail-reviews">
            <Typography variant="h4" style={{ margin: "0 auto", borderRadius: "10px", backgroundColor: "var(--color-primary-dark)", padding: "10px" }}>
              <strong># REVIEWS </strong>
            </Typography>
              <Carousel>
                {movieReviews.results.map((review) => (
                  <Carousel.Item key={review.id}>
                    <Card
                      className="card"
                      style={{
                        width: "100%",
                        minHeight: "250px",
                        maxHeight: "300px",
                        padding: "30px clamp(50px, 10vw, 140px)",
                        overflow: "hidden",
                      }}
                    >
                      <CardContent
                        style={{
                          height: "250px",
                          minHeight: "250px",
                          overflowY: "auto",
                          margin: "0",
                          scrollbarWidth: "none",
                          borderRadius: "10px",
                          
                        }}
                      >
                        <Typography variant="h6" gutterBottom>
                          {review.author}
                        </Typography>

                        {/* 별점 */}
                        <Typography variant="h6" gutterBottom>
                          <StarIcon color="warning" />
                          {' '}
                          {review.author_details.rating}
                        </Typography>


                        <hr />
                        <Typography variant="body1" gutterBottom>
                          {review.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        )}

        <Row className="movie-detail-content">
          <Col className="movie-detail-trailer">
            <Typography variant="h4" style={{ margin: "0 auto" }}>
              <strong># PREVIEW </strong>
            </Typography>
            <iframe
              width="100%"
              height="100%"
              className="iframe"
              src={`https://www.youtube.com/embed/${
                movieTrailer?.results.find((v) => v.type === "Trailer")?.key ||
                movieTrailer?.results[0]?.key
              }`}
              title="Trailer"
            ></iframe>
          </Col>
        </Row>
      </Box>
    </Container>
  );
};

export default MovieDetailPage;
