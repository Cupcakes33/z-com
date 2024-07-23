import styles from "@/styles/beforeLogin/home.module.css";
type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

const { container } = styles;

export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <div className={container}>
      {children}
      {modal}
    </div>
  );
}
