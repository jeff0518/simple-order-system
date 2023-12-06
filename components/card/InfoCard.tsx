import style from "./InfoCard.module.scss";

interface InfoCardProps {
  fistText: string;
  lastText: string | number | undefined;
}
function InfoCard({ fistText, lastText }: InfoCardProps) {
  return (
    <div className={style.infoCard_container}>
      <div className={style.infoCard_fist}>{fistText}</div>
      <div className={style.infoCard_last}>{lastText}</div>
    </div>
  );
}
export default InfoCard;
