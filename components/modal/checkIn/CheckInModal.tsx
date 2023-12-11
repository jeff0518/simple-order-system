import { getClockIn, getClockOut } from "@/services/CheckInAPI";
import { CheckInProps } from "@/utils/type";
import { Toast } from "@/utils/getSweetalert";

import ButtonUI from "@/components/shared/ButtonUI";
import style from "./CheckInModal.module.scss";

function CheckInModal({ checkInData }: CheckInProps) {
  const { name, numberId } = checkInData;

  const clockInHandler = async () => {
    try {
      const clockInData = await getClockIn(numberId);
      Toast.fire({
        icon: "success",
        title: "完成上班打卡!",
      });
      console.log(clockInData);
    } catch (error) {
      Toast.fire({
        icon: "warning",
        title: "請重新登入，然後再試一次!",
      });
      console.log(error);
    }
  };

  const clockOutHandler = async () => {
    try {
      const clockOutData = await getClockOut(numberId);
      Toast.fire({
        icon: "success",
        title: "完成下班打卡!",
      });
      console.log(clockOutData);
    } catch (error) {
      Toast.fire({
        icon: "warning",
        title: "請重新登入，然後再試一次!",
      });
      console.log(error);
    }
  };

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
