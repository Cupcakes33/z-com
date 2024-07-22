import styles from "@/app/(beforeLogin)/page.module.css";
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
