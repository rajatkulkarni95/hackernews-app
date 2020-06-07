import React from "react";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoryContainerStyles";

export const Header = () => {
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
      </StoriesContainerWrapper>
    </>
  );
};
