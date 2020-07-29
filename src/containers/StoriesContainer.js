import React, { useEffect, useState } from "react";
import { getStoryIds } from "../services/hackerNewsAPI";
import { Story } from "../components/Story";
import { StoriesContainerWrapper } from "../styles/StoryContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const StoriesContainer = ({ routeType }) => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds(routeType).then((data) => setStoryIds(data));
  }, [routeType]);

  return (
    <StoriesContainerWrapper data-test-id="stories-container">
      {storyIds.slice(0, count).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </StoriesContainerWrapper>
  );
};
