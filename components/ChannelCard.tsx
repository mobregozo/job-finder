import { Channel } from "../pages";
import styles from './channelcard.module.css';

type ChannelCardType = {
  channel: Channel;
};

const ChannelCard: React.FC<ChannelCardType> = ({ channel }) => {
  return <div className={`${styles.cardContainer}`}>{channel.name}</div>;
};

export default ChannelCard;
