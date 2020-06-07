// Creating Calls for the HackerNews API
import axios from "axios";
import { selectFields } from "../utils/selectFields";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};

export const getStoryIds = async (routeUrl) => {
  const result = await axios.get(routeUrl).then(({ data }) => data);

  return result;
};
