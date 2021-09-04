import { Channel } from "../pages";
import styles from "./channelcard.module.css";

type ChannelCardType = {
  channel: Channel;
};

const ChannelCard: React.FC<ChannelCardType> = ({ channel }) => {
  return (
    <a href={channel.url}
      className={`${styles.cardContainer}`}
    >
      <div className={`${styles.cardName}`}>{channel.name}</div>
      {channel.description && <p className={`${styles.cardDescription}`}>{channel.description}</p>}
    </a>
  );
};

export default ChannelCard;
