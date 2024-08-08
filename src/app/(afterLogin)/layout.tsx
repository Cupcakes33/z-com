import AfterLoginLayoutFeature from "../(afterLogin)/_features/AfterLoginLayoutFeature";

type Props = {
  children: React.ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return <AfterLoginLayoutFeature>{children}</AfterLoginLayoutFeature>;
}
