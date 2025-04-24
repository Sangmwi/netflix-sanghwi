import React from "react";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "@/hooks/useMovieDetail";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "./MovieDetailPage.style.css";
import { Box, CircularProgress } from "@mui/material";

const MovieDetailPage = () => {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useMovieDetail(id);
  console.log(data);

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
        display: "flex",
        justifyContent: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.poster_path})`,
      }}
    >
      <div className="overlay"></div>
      <Box sx={{ maxWidth: "1600px" }}>
        <Row className="movie-detail-header">
          <Col md={4} className="movie-poster-container">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt={data?.title}
            />
          </Col>
          <Col md={8} className="movie-info">
            <Typography variant="h2" component="h1" gutterBottom>
              {data?.title}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <strong>개봉일:</strong>{" "}
              {data?.release_date ? data?.release_date : "정보 없음"}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <strong>
                <StarIcon />
              </strong>{" "}
              {data?.vote_average ? data?.vote_average : "정보 없음"} / 10
            </Typography>
            <Typography variant="h6" gutterBottom>
              <strong>연령:</strong> {data?.adult ? "성인" : "전체 이용가"}
            </Typography>
            <Typography variant="h6" gutterBottom>
              <strong>장르:</strong>{" "}
              {data?.genres.map((genre) => genre.name).join(", ")}
            </Typography>

            <Button
              variant="contained"
              color="error"
              href={data?.homepage ? data?.homepage : ""}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              공식 홈페이지
            </Button>
          </Col>
        </Row>
        <Row className="movie-detail-content">
          <Col>
            <Card className="card">
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  <strong>개요:</strong>{" "}
                  {data?.overview ? data?.overview : "정보 없음"}
                </Typography>
                <hr />
                <Typography variant="body1" gutterBottom>
                  <strong>출연진:</strong>{" "}
                  {data?.credits?.cast && data?.credits?.cast.length > 0
                    ? data?.credits?.cast
                        .slice(0, 5)
                        .map((cast) => cast.name)
                        .join(", ") +
                      " 외 " +
                      (data?.credits?.cast.length - 5) +
                      "명"
                    : "정보 없음"}
                </Typography>
              </CardContent>
            </Card>
          </Col>
        </Row>
      </Box>
    </Container>
  );
};

export default MovieDetailPage;
