import style from "./AttendanceCard.module.scss";

interface AttendanceCardProps {
  date: string;
  clockIn: string;
  clockOut: string;
}

function AttendanceCard({ date, clockIn, clockOut }: AttendanceCardProps) {
  return (
    <div className={style.attendanceCard_container}>
      <div className={style.info}>{date}</div>
      <div className={style.info}>
        <span>簽到</span>
        {clockIn}
      </div>
      <div className={style.info}>
        <span>簽退</span>
        {clockOut}
      </div>
    </div>
  );
}

export default AttendanceCard;
