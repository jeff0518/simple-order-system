import Burger from "./Burger";
import TimeCard from "./TimeCard";
import Footer from "./footer/Footer";

import style from "./Layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <>
      <div className={style.layout_container}>
        <Burger />
        <TimeCard />
      </div>
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
