import React from "react";
import "./NoContent.style.css";

const NoContent = () => {
  return (
    <div className="no-content-wrapper">
      <h1 className="no-content-title">검색 결과가 없네요!</h1>
      <p className="no-content-subtext">다른 검색어를 입력해보세요.</p>
    </div>
  );
};

export default NoContent;
