import React, { useState, useEffect } from "react";
import { getStory } from "../services/hackerNewsAPI";
import {
  StoryWrapper,
  StoryMetaElement,
  StoryMeta,
  StoryTitle,
} from "../styles/StoryStyles";
import { FcLike } from "react-icons/fc";
import { mapTime } from "../mappers/mapTime";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, [storyId]);

  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}> {story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span className="story__likes" data-testid="story-likes">
          <FcLike /> {story.score}
        </span>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="#000">By: </StoryMetaElement> {story.by}{" "}
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="#000">Posted: </StoryMetaElement>{" "}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
