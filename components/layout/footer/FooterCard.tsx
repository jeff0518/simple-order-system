import style from "./FooterCard.module.scss";

interface FooterCardProps {
  text: string;
}

function FooterCard({ text }: FooterCardProps) {
  return <div className={style.footerCard_container}>{text}</div>;
}

export default FooterCard;
