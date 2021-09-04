import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import ChannelCard from "../components/ChannelCard";

export type Channel = {
  name: string;
  description?: string;
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
  const [filter, setFilter] = useState({
    websites: { active: true },
    twitter: { active: true },
    telegram: { active: true },
    subreddit: { active: true },
  });

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
          platforms and channels where it's possible to find your next IT job.
        </p>
        <div>
          <h2>Filter by channel</h2>
          {Object.keys(filter).map((fil) => (
            <button
              key={fil}
              className={`filter-button ${
                !filter[fil].active && ["deselected"]
              }`}
              onClick={() =>
                setFilter({ ...filter, [fil]: { active: !filter[fil].active } })
              }
            >
              {fil}
            </button>
          ))}
        </div>
        {filter["websites"].active && (
          <div>
            <h3 className="subtitile">Websites</h3>
            {channels.websites.map((channel) => (
              <ChannelCard channel={channel} key={channel.name} />
            ))}
          </div>
        )}
        {filter["twitter"].active && (
          <div>
            <h2 className="subtitile">Twitter Accounts</h2>
            {channels.twitter.map((channel) => (
              <ChannelCard channel={channel} key={channel.name} />
            ))}
          </div>
        )}
        {filter["telegram"].active && (
          <div>
            <h2 className="subtitile">Telegram groups</h2>
            {channels.telegram.map((channel) => (
              <ChannelCard channel={channel} key={channel.name} />
            ))}
          </div>
        )}
        {filter["subreddit"].active && (
          <div>
            <h2 className="subtitile">Subreddits</h2>
            {channels.subreddits.map((channel) => (
              <ChannelCard channel={channel} key={channel.name} />
            ))}
          </div>
        )}
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
