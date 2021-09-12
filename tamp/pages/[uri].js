import { useRouter } from "next/router";

import { client } from "../api";

const RedirectURL = () => {
  const router = useRouter();
  const { uri } = router.query;

  return <p>{uri}</p>;
};

export const getServerSideProps = async (context) => {
  let longURL;

  await client
    .get(`/urls/${context.query.uri}`)
    .then((res) => {
      longURL = res.data.longURL;
    })
    .catch((err) => console.log(err));

  if (longURL) {
    return {
      redirect: {
        destination: longURL,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default RedirectURL;
