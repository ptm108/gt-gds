import { useRouter } from "next/router";

const RedirectURL = () => {
  const router = useRouter();

  const { uri } = router.query;

  return <p>{uri}</p>;
};

export const getServerSideProps = async (context) => {
  console.log(context.query.uri);

  return {
    redirect: {
      destination: "https://www.google.com",
      permanent: false,
    },
  };
};

export default RedirectURL;
