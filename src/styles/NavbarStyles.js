import styled from "styled-components";

export const NavStyle = styled.nav`
  nav {
    display: flex;
  }

  ul {
    display: flex;
    justify-content: center;
    margin-top: 25px;
  }

  li {
    margin: 0 15px 0 0;
    letter-spacing: 1.5;
    font-size: 20px;
    color: black;
    border-bottom: 4px solid orangered;
    list-style-type: none;
  }

  li:hover {
    border-bottom: 4px solid black;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
