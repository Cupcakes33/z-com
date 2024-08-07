import { NextPage } from "next";
import styles from "@/styles/afterLogin/components.trands.item.module.css";
import TrandsItem from "./trands.item";

interface Props {}

const TrandsSection: NextPage<Props> = ({}) => {
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

export default TrandsSection;
