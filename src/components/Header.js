import React from "react";
import { NavLink } from "react-router-dom";
import { NavStyle } from "../styles/NavbarStyles";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Header = () => {
  return (
    <HeaderStyle data-test-id="stories-container">
      <h1>
        <span>Hacker</span> News
      </h1>
      <NavStyle>
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                color: "orangered",
                borderBottom: "4px solid black",
              }}
            >
              Top
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/best"
              activeStyle={{
                color: "orangered",
                borderBottom: "4px solid black",
              }}
            >
              Best
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              activeStyle={{
                color: "orangered",
                borderBottom: "4px solid black",
              }}
            >
              New
            </NavLink>
          </li>
        </ul>
      </NavStyle>
      <h3>
        <a href="https://github.com/rajatkulkarni95/hackernews-app">
          <FaGithub style={{ textDecoration: "none", fontSize: "30px" }} />
        </a>
      </h3>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
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
