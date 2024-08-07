import { NextPage } from "next";
import styles from "@/styles/afterLogin/components.trands.item.module.css";
import Link from "next/link";

interface Props {}

const TrandsItem: NextPage<Props> = ({}) => {
  return (
    <Link href={`/search?q=트렌드`} className={styles.container}>
      <div className={styles.count}>실시간트렌드</div>
      <div className={styles.title}>제로초</div>
      <div className={styles.count}>1,234 posts</div>
    </Link>
  );
};

export default TrandsItem;
