import ButtonUI from "../shared/ButtonUI";

import style from "./ListCard.module.scss";

interface employeeProps {
  jobTitle: string;
  name: string;
}

function ListCard({ jobTitle, name }: employeeProps) {
  const navigateHandler = () => {};
  return (
    <div className={style.listCard_container}>
      <div className={style.info}>
        <div className={style.info_title}>職稱: {jobTitle}</div>
        <div className={style.info_name}>姓名: {name}</div>
      </div>

      <div className={style.ctrl}>
        <ButtonUI
          text="詳細資料"
          btnStyle="btn__pill"
          onClick={navigateHandler}
        />
        <ButtonUI text="出勤" btnStyle="btn__pill" onClick={navigateHandler} />
      </div>
    </div>
  );
}

export default ListCard;
