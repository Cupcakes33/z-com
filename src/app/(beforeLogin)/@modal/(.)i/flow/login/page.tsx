import { NextPage } from "next";
import LoginModal from "@/app/(beforeLogin)/_feature/modal.login";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <>
    인터셉트 라우트
      <LoginModal />
    </>
  );
};

export default Page;
