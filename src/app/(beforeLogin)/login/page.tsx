"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Home from "../_feature/Main";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Home />;
};

export default Page;
