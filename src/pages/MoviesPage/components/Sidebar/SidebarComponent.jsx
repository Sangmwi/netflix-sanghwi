import * as React from "react";
import { RichTreeView } from "@mui/x-tree-view/RichTreeView";
import GenreSelectBar from "./GenreSelectBar/GenreSelectBar";
import SortingBar from "./SortingBar/SortingBar";
import "./SidebarComponent.style.css";


  export default function SidebarComponent() {

  return (
    <div className="sidebar-container">
      <GenreSelectBar />
      <SortingBar />
    </div>
  );
}
