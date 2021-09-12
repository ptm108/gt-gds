import clientPromise from "../../lib/mongodb";
import { nanoid } from "nanoid";

let db;

export default async (req, res) => {
  if (req.method === "POST") {
    let { longURL } = req.body;

    // sanitize url
    longURL = longURL.trim();

    // check URL
    if (!/https?:\/\/([\da-z\.-]+)\.([a-z]{2,6})([\/\w\.-]*)*\/?/i.test(longURL)) {
      res.status(400).json({ error: "Boohoo, you've provided an invalid URL" });
      return;
    }

    // initiate db connection
    if (!db) {
      const client = await clientPromise;
      db = client.db();
    }

    // check if long url is already in db
    const urls = await db
      .collection("urls")
      .find({
        longURL: longURL,
      })
      .toArray();
    if (urls.length > 0) {
      res.status(200).json(urls[0]);
      return;
    }

    // generate unique 8-letter short url
    let shortURL = nanoid(8);
    // max 10 tries
    for (let i = 0; i < 10; i++) {
      if (db.collection("urls").find({ shortURL: shortURL }).toArray().length <= 0) {
        break;
      }
      shortURL = nanoid(8); // regen a new id
    }

    const _id = await db.collection("urls").insertOne({
      shortURL: `/${shortURL}`,
      longURL: longURL,
    });

    res.status(200).json(_id.ops[0]);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
