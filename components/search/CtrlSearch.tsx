import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import ButtonUI from "../shared/ButtonUI";
import style from "./CtrlSearch.module.scss";
function CtrlSearch() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return (
    <div className={style.ctrlSearch_container}>
      <div className={style.title}>請選擇月份:</div>
      <div className={style.date}>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy/MM"
          showMonthYearPicker
          className={style.customDatePicker}
        />
      </div>
      <div className={style.button}>
        <ButtonUI text="查詢" btnStyle="btn__pill" onClick={() => {}} />
      </div>
    </div>
  );
}
export default CtrlSearch;
