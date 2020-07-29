import styled from "styled-components";

export const HeaderStyle = styled.nav`
  nav {
    display: flex;
  }

  ul {
    display: flex;
    margin-left: 50px;
  }

  li {
    margin: 0 15px 0 0;
    letter-spacing: 1.5;
    font-size: 20px;
    color: orangered;
    border-bottom: 4px solid black;
    list-style-type: none;
  }

  li:hover {
    color: black;
    border-bottom: 4px solid orangered;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
