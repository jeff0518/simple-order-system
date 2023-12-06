import { useState, useEffect } from "react";
import { getNumberIdEmployeeData } from "@/services/EmployeeData";

import { EmployeeProps } from "@/utils/type";
import InfoCard from "@/components/card/InfoCard";
import ButtonUI from "@/components/shared/ButtonUI";

import style from "./EmployeeInformationModal.module.scss";

interface InfoProps {
  numberId: string;
  employeeIdData: EmployeeProps | undefined;
  setEmployeeIdData: (employeeIdData: EmployeeProps) => void;
  onClick: () => void;
  setIsEmployeeInfo: (isEmployeeInfo: boolean) => void;
  setIsChangeEmployeeInfo: (isChangeEmployeeInfo: boolean) => void;
}

function EmployeeInformationModal({
  onClick,
  numberId,
  employeeIdData,
  setEmployeeIdData,
  setIsEmployeeInfo,
  setIsChangeEmployeeInfo,
}: InfoProps) {
  const fetchData = async () => {
    try {
      const data = await getNumberIdEmployeeData(numberId);
      setEmployeeIdData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(employeeIdData);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.info_container}>
        <div className={style.info_data}>
          {employeeIdData && (
            <>
              <InfoCard
                fistText="員工編號"
                lastText={employeeIdData.numberId}
              />
              <InfoCard fistText="姓名" lastText={employeeIdData.name} />
              <InfoCard fistText="職稱" lastText={employeeIdData.jobTitle} />
              <InfoCard
                fistText="入職日期"
                lastText={employeeIdData.employmentDate}
              />
              <InfoCard fistText="手機" lastText={employeeIdData.phone} />
              <InfoCard fistText="居住地址" lastText={employeeIdData.address} />
            </>
          )}
        </div>
        <div className={style.info_ctrl}>
          <ButtonUI
            btnStyle="btn__pill"
            text="修改"
            onClick={() => {
              setIsEmployeeInfo(false);
              setIsChangeEmployeeInfo(true);
            }}
          />
          <ButtonUI btnStyle="btn__pill" text="刪除" onClick={() => {}} />
        </div>
      </div>
    </>
  );
}

export default EmployeeInformationModal;
