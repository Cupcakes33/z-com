import { NextPage } from "next";
import { redirect } from "next/navigation";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  redirect("/i/flow/signup");
};

export default Page;
