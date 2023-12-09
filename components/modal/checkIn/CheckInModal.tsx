import { CheckInProps } from "@/utils/type";

import ButtonUI from "@/components/shared/ButtonUI";
import style from "./CheckInModal.module.scss";

function CheckInModal({ checkInData }: CheckInProps) {
  return (
    <>
      <div className={style.checkIn_container}>
        <div className={style.title}>{checkInData.name} 你好！</div>
        <div className={style.buttonBox}>
          <ButtonUI
            btnStyle="btn__checkIn__pill"
            text="上班"
            onClick={() => {}}
          />
          <ButtonUI
            btnStyle="btn__checkIn__pill"
            text="下班"
            onClick={() => {}}
          />
        </div>
      </div>
    </>
  );
}
export default CheckInModal;
