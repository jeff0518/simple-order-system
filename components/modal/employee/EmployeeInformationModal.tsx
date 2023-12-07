import { useState, useEffect } from "react";
import {
  getNumberIdEmployeeData,
  deleteEmployeeData,
} from "@/services/EmployeeDataAPI";

import { EmployeeProps } from "@/utils/type";
import { Toast } from "@/utils/getSweetalert";
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
  const fetchDataHandler = async () => {
    try {
      const data = await getNumberIdEmployeeData(numberId);
      setEmployeeIdData(data.data);
    } catch (error) {
      Toast.fire({
        icon: "warning",
        title: "無法抓取資料！",
      });
      console.log(error);
    }
  };

  const deleteDataHandler = async () => {
    try {
      const data = await deleteEmployeeData(numberId);
      if (data) {
        Toast.fire({
          icon: "success",
          title: "刪除員工資料成功!",
        });
      } else {
        Toast.fire({
          icon: "warning",
          title: "刪除失敗！",
        });
      }

      onClick();
    } catch (error) {
      Toast.fire({
        icon: "warning",
        title: "無法刪除！",
      });
    }
  };

  useEffect(() => {
    fetchDataHandler();
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
          <ButtonUI
            btnStyle="btn__pill"
            text="刪除"
            onClick={deleteDataHandler}
          />
        </div>
      </div>
    </>
  );
}

export default EmployeeInformationModal;
