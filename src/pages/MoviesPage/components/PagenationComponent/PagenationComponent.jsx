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
      backgroundColor: "var(--color-primary-darkest) !important",
      color: "var(--color-secondary-light)",
      fontWeight: "bold",
      borderColor: "#aaa",
    },
  
    "& .Mui-selected:hover": {
      backgroundColor: "#eee",
    },
  };


const PagenationComponent = ({ page, data, setSearchParams }) => {
  return (
    <Pagination
      page={parseInt(page, 10)}
      count={data?.total_pages || 10}
      shape="rounded"
      showFirstButton
      showLastButton
      onChange={(event, value) => {
        setSearchParams((prev) => {
          prev.set("page", value);
          return prev;
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
        sx={paginationStyle}
    />
  );
};

export default PagenationComponent;
