// Creating Calls for the HackerNews API
import axios from "axios";
import { selectFields } from "../utils/selectFields";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const topStoriesUrl = `${baseUrl}topstories.json`;
const storyUrl = `${baseUrl}item/`;
//const newStoriesUrl = `${baseUrl}newstories.json`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};

export const getStoryIds = async () => {
  const result = await axios.get(topStoriesUrl).then(({ data }) => data);

  return result;
};
