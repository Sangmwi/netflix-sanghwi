import React from "react";
import Badge from 'react-bootstrap/Badge';
import "./GenreBadge.style.css";

const GenreBadge = ({ genre }) => {
  return (
    <Badge
      className="genre-badge"
      bg="danger"
    >
      {genre}
    </Badge>
  );
};

export default GenreBadge;
