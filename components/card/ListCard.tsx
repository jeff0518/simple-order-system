import { useRouter } from "next/router";

import ButtonUI from "../shared/ButtonUI";
import { EmployeeProps } from "@/utils/type";

import style from "./ListCard.module.scss";

function ListCard({ jobTitle, name, numberId }: EmployeeProps) {
  const router = useRouter();
  const navigateHandler = () => {
    router.replace(`/employee/${numberId}`);
  };
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
