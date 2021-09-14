import React from "react";
import Layout from "../features/Layout";
import NotFoundPage from "../features/NotFoundPage";

import clientPromise from "../lib/mongodb";

const RedirectURL = () => {
  return (
    <Layout>
      <NotFoundPage />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  let db;

  // initiate db connection
  if (!db) {
    const client = await clientPromise;
    db = client.db();
  }

  // check if long url is already in db
  const urls = await db
    .collection("urls")
    .find({
      shortURL: context.query.uri,
    })
    .toArray();
  if (urls.length > 0) {
    return {
      redirect: {
        destination: urls[0].longURL,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default RedirectURL;
