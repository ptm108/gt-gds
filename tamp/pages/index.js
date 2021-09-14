import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import clientPromise from "../lib/mongodb";
import Layout from "../features/Layout";
import MainPage from "../features/MainPage";
import LoadingPage from "../features/LoadingPage";
import ShortURLPage from "../features/ShortURLPage";
import ErrorPage from "../features/ErrorPage";

const Home = () => {
  const [page, paginate] = useState(1);
  const [res, setRes] = useState({});

  return (
    <Layout>
      <AnimatePresence>
        {page === 1 && <MainPage paginate={paginate} setRes={setRes} />}
        {page === 2 && <LoadingPage />}
        {page === 3 && <ShortURLPage paginate={paginate} res={res} />}
        {page === 4 && <ErrorPage paginate={paginate} res={res} />}
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
