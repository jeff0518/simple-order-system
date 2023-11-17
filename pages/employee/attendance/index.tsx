import AttendanceCard from "@/components/card/AttendanceCard";
import style from "./Attendance.module.scss";

function Attendance() {
  return (
    <div className={style.attendance_container}>
      <div className={style.info}>
        <div>職稱：服務員</div>
        <div>姓名：Jeff</div>
        <div>年資：5年</div>
      </div>
      <div className={style.attendance}>
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
        <AttendanceCard />
      </div>
    </div>
  );
}

export default Attendance;
