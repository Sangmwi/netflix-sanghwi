import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useMovieGenre } from "@/hooks/useMovieGenre";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import "./SidebarComponent.style.css";

const GENRE_LIST = [
  {
    id: "genre",
    label: "모든 장르",
    children: [
      { id: "28", label: "액션" },
      { id: "12", label: "어드벤쳐" },
      { id: "16", label: "애니메이션" },
      { id: "35", label: "코미디" },
      { id: "80", label: "범죄" },
      { id: "99", label: "다큐멘터리" },
      { id: "18", label: "드라마" },
      { id: "10751", label: "가족" },
      { id: "14", label: "판타지" },
      { id: "36", label: "역사" },
      { id: "27", label: "공포" },
      { id: "10402", label: "음악" },
      { id: "9648", label: "미스테리" },
      { id: "10749", label: "로맨스" },
      { id: "878", label: "SF" },
      { id: "10770", label: "TV 영화" },
      { id: "53", label: "스릴러" },
      { id: "10752", label: "전쟁" },
      { id: "37", label: "서부" },
    ],
  },
];

export default function SidebarComponent() {
  const [selectedItems, setSelectedItems] = useState(["genre"]);

  const handleSelectedItemsChange = (event, ids) => {
    setSelectedItems(ids);
  };

  return (
    <RichTreeView
      items={GENRE_LIST}
      selectedItems={selectedItems}
      onSelectedItemsChange={handleSelectedItemsChange}
      multiSelect
      checkboxSelection
      selectionPropagation={{
        parents: true,
        descendants: true,
      }}
      sx={{
        backgroundColor: "transparent",
        color: "#eee",
        maxHeight: "none",


        // 트리 아이템 기본
        "& .MuiTreeItem-content": {
          gap: "2px",
          userSelect: "none",
          borderRadius: "6px",
          transition: "background-color 0.2s",
        },

        // hover 시: 살짝 어두워짐
        "& .MuiTreeItem-content:hover": {
          backgroundColor: "#2a2a2a",
        },

        // 클릭되었을 때 기본 배경 제거 + 텍스트 색상 유지
        "& .Mui-selected": {
          backgroundColor: "transparent !important",
          color: "#fff",
        },

        "& .MuiTreeItem-label": {
          fontSize: "0.9rem",
        },
        // 클릭된 항목 hover에도 배경 변화 없음
        "& .Mui-selected:hover": {
          backgroundColor: "#2a2a2a !important",
        },

        // 체크박스 크기 & 색상
        "& .MuiCheckbox-root": {
          color: "#bbb",
          transform: "scale(0.75)",
        },
        "& .MuiCheckbox-root.Mui-checked": {
          color: "var(--color-primary-dark)", // 강조 컬러
        },

        // 펼침 아이콘 (▶/▼) 색상
        "& .MuiTreeItem-iconContainer": {
          color: "#888",
          fontSize: "1rem",
        },
      }}
    />
  );
}
