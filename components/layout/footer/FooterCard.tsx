import style from "./FooterCard.module.scss";

interface FooterCardProps {
  text: string;
  onClick: () => void;
}

function FooterCard({ text, onClick }: FooterCardProps) {
  return (
    <div className={style.footerCard_container} onClick={onClick}>
      {text}
    </div>
  );
}

export default FooterCard;
