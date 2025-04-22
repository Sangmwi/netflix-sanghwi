import React from "react";
import Pagination from "@mui/material/Pagination";

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
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: 4,
        paddingBottom: 4,


        //스타일 지정
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
          backgroundColor: "var(--color-primary-darker)",
          color: "var(--color-secondary)",
          fontWeight: "bold",
          borderColor: "#aaa",
        },

        "& .Mui-selected:hover": {
          backgroundColor: "#eee",
        },
      }}
    />
  );
};

export default PagenationComponent;
