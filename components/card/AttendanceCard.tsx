import style from "./AttendanceCard.module.scss";

function AttendanceCard() {
  return (
    <div className={style.attendanceCard_container}>
      <div className={style.info}>2023.11.17</div>
      <div className={style.info}>上班：08:12</div>
      <div className={style.info}>下班：20:12</div>
      <div className={style.info}>總時數：12小時</div>
    </div>
  );
}

export default AttendanceCard;
