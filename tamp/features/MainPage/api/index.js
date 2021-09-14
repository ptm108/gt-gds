import { client } from "../../../api";

export const createShortenedURL = (longURL) => {
  return client.post("/urls", { longURL: longURL });
};
