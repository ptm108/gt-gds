import React from "react";

import Layout from "../features/Layout";
import clientPromise from "../lib/mongodb";
import MainPage from "../features/MainPage";

const Home = () => {
  return (
    <Layout>
      <MainPage />
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands
  return {
    props: {},
  };
}

export default Home;
