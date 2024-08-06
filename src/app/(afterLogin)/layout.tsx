import styles from "@/styles/afterLogin/layout.main.module.css";
import Image from "next/image";
import Link from "next/link";
import ZLogo from "../../../public/yRsRRjGO.jpg";
import Icon from "@/components/icon";
import NavMenu from "./_feature/nav.navmenu";

type Props = {
  children: React.ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link className={styles.logo} href="/home">
              <div className={styles.logoPill}>
                <Image src={ZLogo} alt="logo" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu/>
              </ul>
            </nav>
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <form className={styles.search}>
              <Icon name="search" width={20} />
              <input type="search"></input>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
