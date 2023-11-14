import FooterCard from "./FooterCard";

import style from "./Footer.module.scss";

function Footer() {
  return (
    <div className={style.footer_container}>
      <FooterCard text="各桌用餐時間" />
      <FooterCard text="各桌用餐金額" />
      <FooterCard text="員工打卡" />
    </div>
  );
}

export default Footer;
