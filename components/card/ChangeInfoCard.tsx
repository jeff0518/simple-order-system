import style from "./ChangeInfoCard.module.scss";

interface ChangeInfoCardProps {
  type: string;
  fistText: string;
  lastText: string | number;
}

function ChangeInfoCard({ fistText, lastText, type }: ChangeInfoCardProps) {
  return (
    <div className={style.changeInfoCard_container}>
      <div className={style.changeInfo_fist}>{fistText}</div>
      <input
        type={type}
        className={style.changeInfo_last}
        defaultValue={lastText}
      />
    </div>
  );
}
export default ChangeInfoCard;
