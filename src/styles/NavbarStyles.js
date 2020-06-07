import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    display: inline;
  }
  ul li {
    float: left;
    list-style: none;
    text-align: center;
    background-color: #ffffff;
    margin-right: 30px;
    width: 150px;
    line-height: 60px;
  }
  ul li a {
    text-decoration: none;
    color: #000000;
    display: block;
  }

  ul li a:hover {
    text-decoration: none;
    color: #000000;
    background-color: #f8dc3d;
  }
`;
