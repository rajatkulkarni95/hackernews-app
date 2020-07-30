import React from "react";
import { Switch, Route } from "react-router-dom";
import { StoriesContainer } from "../containers/StoriesContainer";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const topStoriesUrl = `${baseUrl}topstories.json`;
const newStoriesUrl = `${baseUrl}newstories.json`;
const bestStoriesUrl = `${baseUrl}beststories.json`;

export const Routes = () => {
  return (
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
  );
};
