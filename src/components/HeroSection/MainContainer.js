import React from "react";
import CategoryList from "./CategoryList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <main className="main-container">
      <CategoryList />
      <VideoContainer />
    </main>
  );
};

export default MainContainer;
