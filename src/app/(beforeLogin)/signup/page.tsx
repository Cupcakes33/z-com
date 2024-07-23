"use client";

import { NextPage } from "next";
import { useRouter } from "next/navigation";
import Home from "../_feature/page.home";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const router = useRouter();
  router.replace("/i/flow/signup");
  return <Home />;
};

export default Page;
