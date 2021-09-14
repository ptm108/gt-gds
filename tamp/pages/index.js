import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import clientPromise from "../lib/mongodb";
import Layout from "../features/Layout";
import MainPage from "../features/MainPage";
import LoadingPage from "../features/LoadingPage";

const Home = () => {
  const [page, setPage] = useState(1);

  return (
    <Layout>
      <AnimatePresence>
        {page === 1 && <MainPage />}
        {page === 2 && <LoadingPage />}
      </AnimatePresence>
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
