import { CheckInProps } from "@/utils/type";

import ButtonUI from "@/components/shared/ButtonUI";
import style from "./CheckInModal.module.scss";

function CheckInModal({ checkInData }: CheckInProps) {
  const { name, numberId } = checkInData;

  const clockInHandler = () => {};
  const clockOutHandler = () => {};
  return (
    <>
      <div className={style.checkIn_container}>
        <div className={style.title}>{name} 你好！</div>
        <div className={style.buttonBox}>
          <ButtonUI
            btnStyle="btn__checkIn__pill"
            text="上班"
            onClick={clockInHandler}
          />
          <ButtonUI
            btnStyle="btn__checkIn__pill"
            text="下班"
            onClick={clockOutHandler}
          />
        </div>
      </div>
    </>
  );
}
export default CheckInModal;
