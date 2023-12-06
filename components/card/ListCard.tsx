import { useState } from "react";

import EmployeeInformationModal from "../modal/employee/EmployeeInformationModal";
import ChangeInformation from "../modal/employee/ChangeInformationModal";
import ButtonUI from "../shared/ButtonUI";
import { EmployeeProps } from "@/utils/type";

import style from "./ListCard.module.scss";

function ListCard({ jobTitle, name, numberId, setDataUpdate }: EmployeeProps) {
  const [isEmployeeInfo, setIsEmployeeInfo] = useState<boolean>(false);
  const [isChangeEmployeeInfo, setIsChangeEmployeeInfo] =
    useState<boolean>(false);
  const [employeeIdData, setEmployeeIdData] = useState<EmployeeProps>();

  const closeModalHandler = () => {
    setIsEmployeeInfo(false);
    setIsChangeEmployeeInfo(false);
    if (setDataUpdate) {
      setDataUpdate((prev: boolean) => !prev);
    }
  };

  return (
    <>
      {isEmployeeInfo && (
        <EmployeeInformationModal
          numberId={numberId}
          employeeIdData={employeeIdData}
          setEmployeeIdData={setEmployeeIdData}
          setIsEmployeeInfo={setIsEmployeeInfo}
          setIsChangeEmployeeInfo={setIsChangeEmployeeInfo}
          onClick={closeModalHandler}
        />
      )}
      {isChangeEmployeeInfo && (
        <ChangeInformation
          employeeIdData={employeeIdData}
          setEmployeeIdData={setEmployeeIdData}
          onClick={closeModalHandler}
          numberId={numberId}
        />
      )}

      <div className={style.listCard_container}>
        <div className={style.info}>
          <div className={style.info_title}>職稱: {jobTitle}</div>
          <div className={style.info_name}>姓名: {name}</div>
        </div>

        <div className={style.ctrl}>
          <ButtonUI
            text="詳細資料"
            btnStyle="btn__pill"
            onClick={() => {
              setIsEmployeeInfo(true);
            }}
          />
          <ButtonUI text="出勤" btnStyle="btn__pill" onClick={() => {}} />
        </div>
      </div>
    </>
  );
}

export default ListCard;
