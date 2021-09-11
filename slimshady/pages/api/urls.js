import clientPromise from "../../lib/mongodb";

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

    if (!db) {
      const client = await clientPromise;
      db = client.db();
    }

    const urls = await db.collection("urls").find({}).toArray();

    res.status(201).json({ message: "ok", longURL: longURL });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};
