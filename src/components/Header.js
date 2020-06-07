import React from "react";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoryContainerStyles";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <GlobalStyle />
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        <h3>
          Made by Rajat{" "}
          <a href="https://github.com/rajatkulkarni95/hackernews-app">
            <FaGithub />
          </a>
        </h3>
      </StoriesContainerWrapper>
    </>
  );
};
