import clientPromise from "../../../lib/mongodb";

let db;

export default async (req, res) => {
  // create a new shortened url
  if (req.method === "GET") {
    const { shortURL } = req.query;

    // initiate db connection
    if (!db) {
      const client = await clientPromise;
      db = client.db();
    }

    // check if long url is already in db
    const urls = await db
      .collection("urls")
      .find({
        shortURL: shortURL,
      })
      .toArray();
    if (urls.length > 0) {
      res.status(200).json(urls[0]);
      return;
    }

    res.status(404).send("Not found");
    return;
  }

  res.setHeader("Allow", "GET");
  res.status(405).end("Method Not Allowed");
};
