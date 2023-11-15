import FooterCard from "./FooterCard";

import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer_container}>
      <div className={style.footer_left}>
        <FooterCard text="各桌用餐時間" />
        <FooterCard text="各桌用餐金額" />
      </div>
      <div className={style.footer_right}>
        <FooterCard text="員工打卡" />
      </div>
    </div>
  );
}

export default Footer;
