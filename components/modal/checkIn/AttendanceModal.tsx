import { useEffect, useState } from "react";
import { getCheckInData } from "@/services/CheckInAPI";
import { AxiosResponse } from "axios";

import AttendanceCard from "@/components/card/AttendanceCard";
import style from "./AttendanceModal.module.scss";

interface AttendanceModalProps {
  numberId: string;
  name: string;
  jobTitle: string;
  onClick: () => void;
}

interface CheckInData {
  numberId: string;
  clockRecords: ClockRecords[];
}

interface ClockRecords {
  date: string;
  clockIn: string;
  clockOut: string;
}

function AttendanceModal({
  numberId,
  name,
  jobTitle,
  onClick,
}: AttendanceModalProps) {
  const [attendanceData, setAttendanceData] = useState<CheckInData | undefined>(
    undefined
  );

  const getAttendance = async () => {
    try {
      const data = await getCheckInData(numberId);
      if (data) {
        setAttendanceData(data.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(attendanceData);

  useEffect(() => {
    getAttendance();
  }, []);
  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.attendance_container}>
        <div className={style.info}>
          <div>職稱：{jobTitle}</div>
          <div>姓名：{name}</div>
        </div>
        <div className={style.attendance}>
          {attendanceData &&
            attendanceData.clockRecords.map((item: ClockRecords) => {
              return (
                <AttendanceCard
                  date={item.date}
                  clockIn={item.clockIn}
                  clockOut={item.clockOut}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}

export default AttendanceModal;
