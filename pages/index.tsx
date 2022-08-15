import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout heightFit>
      <h1 className="text-3xl mt-5">
        Welcome to <br />
        <span className="font-bold italic">Gangnam Coding Club</span>!
      </h1>

      <p className="mt-5">
        Hello, and welcome to the Gangnam coding club webpage.{" "}
        <span className="font-bold italic">Gangnam Coding Club</span> is a
        community of young and bright, developers, entrepreneurs.
      </p>

      <p className="mt-3">
        Our aim is to provide a set of connection to our users who are making
        through the tech industry with wonderful, innovative ideas.
      </p>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return { props: {} };
};

export default Home;
