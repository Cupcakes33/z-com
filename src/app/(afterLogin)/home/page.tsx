"use client";
import { NextPage } from "next";

import HomePageFeature from "./_feature/HomePageFeature";

import styles from "./_styles/home.module.css";


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <main className={styles.main}>
      <HomePageFeature />
    </main>
  );
};

export default Page;
