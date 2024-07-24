import styles from "@/styles/afterLogin/layout.main.module.css";
import Image from "next/image";
import Link from "next/link";
import ZLogo from "../../../public/yRsRRjGO.jpg";
import Icon from "@/components/icon";

const {
  container,
  leftSectionWrapper,
  leftSection,
  leftSectionFixed,
  logo,
  logoPill,
  postButton,
  rightSectionWrapper,
  rightSectionInner,
  main,
  rightSection,
  search,
  followRecommend,
} = styles;

type Props = {
  children: React.ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className={container}>
      <header className={leftSectionWrapper}>
        <section className={leftSection}>
          <div className={leftSectionFixed}>
            <Link className={logo} href="/home">
              <div className={logoPill}>
                <Image src={ZLogo} alt="logo" width={40} height={40} />
              </div>
            </Link>
          </div>
        </section>
      </header>
      <div className={rightSectionWrapper}>
        <div className={rightSectionInner}>
          <main className={main}>{children}</main>
          <section className={rightSection}>
            <form className={search}>
              <Icon name="search" width={20} />
              <input type="search"></input>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
