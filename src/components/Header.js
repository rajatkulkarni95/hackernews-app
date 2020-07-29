import React from "react";
import { StoriesContainerWrapper } from "../styles/StoryContainerStyles";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <Nav data-test-id="stories-container">
        <h1>
          <span>Hacker</span> News
        </h1>

        <h3>
          <a href="https://github.com/rajatkulkarni95/hackernews-app">
            <FaGithub style={{ textDecoration: "none", fontSize: "30px" }} />
          </a>
        </h3>
      </Nav>
    </>
  );
};

const Nav = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 30px;

  h1 {
    font-size: 30px;
    margin: 20px;
  }

  span {
    color: orangered;
  }
`;
