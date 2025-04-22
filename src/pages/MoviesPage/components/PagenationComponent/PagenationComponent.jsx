import React from "react";
import Pagination from "@mui/material/Pagination";


const paginationStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: 4,
    paddingBottom: 4,
    userSelect: "none",
  
    "& .MuiPaginationItem-root": {
      color: "#ccc",
      borderColor: "#555",
      backgroundColor: "transparent",
      transition: "all 0.2s ease-in-out",
    },
  
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "#333",
    },
  
    "& .Mui-selected": {
      backgroundColor: "var(--color-primary-darker) !important",
      color: "var(--color-primary-lightest)",
      fontWeight: "bold",
      borderColor: "#aaa",
    },
  
    "& .Mui-selected:hover": {
      backgroundColor: "#eee",
    },

    "& .MuiPaginationItem-text": {
        fontSize: "0.8rem",
        padding: "0rem",
    },

    "& .MuiPagination-ul": {
        width: "fit-content",
    },
  };


const PagenationComponent = ({ page, count, setSearchParams }) => {
  return (
    <Pagination
      page={parseInt(page, 10)}
      count={count || 5}
      siblingCount={2}
      shape="rounded"
      size="small"
      sx={paginationStyle}
      onChange={(event, value) => {
        setSearchParams((prev) => {
          prev.set("page", value);
          return prev;
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    />
  );
};

export default PagenationComponent;
