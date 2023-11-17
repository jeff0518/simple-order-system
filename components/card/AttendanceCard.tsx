import style from "./AttendanceCard.module.scss";

function AttendanceCard() {
  return (
    <div className={style.attendanceCard_container}>
      <div className={style.info}>上班打卡：2023.11.17 12:12</div>
      <div className={style.info}>下班打卡：2023.11.17 12:12</div>
      <div className={style.info}>總時數：12小時</div>
    </div>
  );
}

export default AttendanceCard;
