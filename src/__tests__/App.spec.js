import React from "react";
import { act } from "react-dom/test-utils";
import { App } from "../App";
import { render, cleanup, waitForElement } from "@testing-library/react";
import { storyIds, singularStory } from "../fixtures/index";
import { getStory, getStoryIds } from "../services/hackerNewsAPI";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants/index";

beforeEach(cleanup);

jest.mock("../hooks/useInfiniteScroll.js");

jest.mock("../services/hackerNewsAPI", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test("renders the application", async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));
  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  await act(async () => {
    const { getByText, queryByTestId } = render(<App />);
    await waitForElement(() => [
      expect(getByText("Hacker News Stories")).toBeTruthy(),
      expect(getByText("Write Libraries, Not Frameworks")).toBeTruthy(),
      expect(queryByTestId("story-by").textContent).toEqual("By: Karl Hadwen"),
    ]);
  });
});
