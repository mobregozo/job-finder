import { GetStaticProps } from "next";
import Head from "next/head";
import ChannelCard from "../components/ChannelCard";

export type Channel = {
  name: string;
  desciprition?: string;
  tags?: string[];
  url: string;
};

type ChannelType = {
  websites: Channel[];
  telegram: Channel[];
  twitter: Channel[];
  subreddits: Channel[];
};
type IndexProps = {
  channels: ChannelType;
};

const Index: React.FC<IndexProps> = ({ channels }) => {
  return (
    <div className="container">
      <Head>
        <title>Job Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Welcome to Job Finder!</h1>
        <p>
          The main idea of the website is to provide different websites,
          platforms and channels where.
        </p>
        Subreddits
        {channels.subreddits.map((channel) => (
          <ChannelCard channel={channel} key={channel.name} />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const channels = require("./../public/data.json");
  return {
    props: { channels },
    revalidate: 1,
  };
};

export default Index;
