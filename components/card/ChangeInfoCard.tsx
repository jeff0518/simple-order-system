import style from "./ChangeInfoCard.module.scss";

interface ChangeInfoCardProps {
  type: string;
  fistText: string;
  lastText: string | number | undefined;
  inputRef?: React.RefObject<HTMLInputElement>;
}

function ChangeInfoCard({
  fistText,
  lastText,
  type,
  inputRef,
}: ChangeInfoCardProps) {
  return (
    <div className={style.changeInfoCard_container}>
      <div className={style.changeInfo_fist}>{fistText}</div>
      {type === "tel" ? (
        <input
          type={type}
          className={style.changeInfo_last}
          defaultValue={lastText}
          ref={inputRef}
          maxLength={10}
          pattern="[0-9]*"
          required
        />
      ) : type === "text" ? (
        <input
          type={type}
          className={style.changeInfo_last}
          defaultValue={lastText}
          ref={inputRef}
          required
        />
      ) : (
        <input
          type={type}
          className={style.changeInfo_last}
          defaultValue={lastText}
          disabled
        />
      )}
    </div>
  );
}
export default ChangeInfoCard;
