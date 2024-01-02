import { useState, useContext } from "react";

import FooterCard from "./FooterCard";
import SearchEmployeeModal from "@/components/modal/checkIn/SearchEmployeeModal";
import { TableContext } from "@/context/TableData";

import style from "./Footer.module.scss";
function Footer() {
  const { totalAmount } = useContext(TableContext);
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [isShowCheckIn, setIsShowCheckIn] = useState(false);
  const employeeLoginHandler = () => {
    setIsShowCheckIn(true);
    setIsShowSearch(true);
  };
  return (
    <>
      {isShowCheckIn && (
        <SearchEmployeeModal
          isShowSearch={isShowSearch}
          setIsShowSearch={setIsShowSearch}
          setIsShowCheckIn={setIsShowCheckIn}
        />
      )}
      <div className={style.footer_container}>
        <div className={style.footer_left}>
          <FooterCard text="目前金額" onClick={() => {}} />
        </div>
        <div className={style.footer_right}>
          <FooterCard text="員工打卡" onClick={employeeLoginHandler} />
        </div>
      </div>
    </>
  );
}

export default Footer;
