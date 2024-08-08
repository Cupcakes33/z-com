import { NextPage } from "next";

import TrandsItem from "./TrendsItem";

import styles from "../_styles/trendsSection.module.css";

interface Props {}

const TrendsSection: NextPage<Props> = ({}) => {
  return (
    <div className={styles.trendBg}>
      <div className={styles.trend}>
        <h3>나를 위한 트렌드</h3>
        {Array.from({ length: 10 }).map((_, index) => (
          <TrandsItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendsSection;
