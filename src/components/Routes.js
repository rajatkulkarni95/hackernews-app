import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StoriesContainer } from "../containers/StoriesContainer";
import { HeaderStyle } from "../styles/NavbarStyles";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const topStoriesUrl = `${baseUrl}topstories.json`;
const newStoriesUrl = `${baseUrl}newstories.json`;
const bestStoriesUrl = `${baseUrl}beststories.json`;

export const Routes = () => {
  return (
    <Router>
      <HeaderStyle>
        <nav>
          <ul>
            <li>
              <Link to="/">Top</Link>
            </li>
            <li>
              <Link to="/best">Best</Link>
            </li>
            <li>
              <Link to="/new">New</Link>
            </li>
          </ul>
        </nav>
      </HeaderStyle>
      <Switch>
        <Route path="/best">
          <StoriesContainer routeType={bestStoriesUrl} />
        </Route>
        <Route path="/new">
          <StoriesContainer routeType={newStoriesUrl} />
        </Route>
        <Route path="/">
          <StoriesContainer routeType={topStoriesUrl} />
        </Route>
      </Switch>
    </Router>
  );
};
