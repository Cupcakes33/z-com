import { NextPage } from "next";
import FollowItem from "./FollowItem";

import styles from "../_styles/followSection.module.css";

interface Props {}

const FollowSection: NextPage<Props> = ({}) => {
  return (
    <div className={styles.followRecommend}>
      <h3>팔로우 추천</h3>
      {Array.from({ length: 3 }).map((_, index) => (
        <FollowItem key={index} />
      ))}
    </div>
  );
};

export default FollowSection;
