import axios from "axios";
import { useRef, useEffect } from "react";
import { FormEvent } from "@/utils/type";
import { Toast } from "@/utils/getSweetalert";
import { EmployeeProps } from "@/utils/type";
// import { patchNumberIdEmployeeData } from "@/services/EmployeeData";

import ChangeInfoCard from "@/components/card/ChangeInfoCard";
import ButtonUI from "@/components/shared/ButtonUI";

import style from "./ChangeInformationModal.module.scss";

interface ChangeInfoProps {
  numberId: string;
  employeeIdData: EmployeeProps | undefined;
  setEmployeeIdData: (employeeIdData: EmployeeProps) => void;
  onClick: () => void;
}
function ChangeInformation({
  numberId,
  onClick,
  employeeIdData,
  setEmployeeIdData,
}: ChangeInfoProps) {
  const nameInputRef = useRef<HTMLInputElement>(null!);
  const jobTitleInputRef = useRef<HTMLInputElement>(null!);
  const employmentDateInputRef = useRef<HTMLInputElement>(null!);
  const phoneInputRef = useRef<HTMLInputElement>(null!);
  const addressInputRef = useRef<HTMLInputElement>(null!);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (
      !nameInputRef.current ||
      !jobTitleInputRef.current ||
      !employmentDateInputRef.current ||
      !phoneInputRef.current ||
      !addressInputRef.current
    ) {
      console.log("未補抓到InputRef");
      Toast.fire({
        icon: "warning",
        title: "輸入欄位填寫不完全!",
      });
      return;
    }

    const enterName = nameInputRef.current.value;
    const enterJobTitle = jobTitleInputRef.current.value;
    const enterEmployment = employmentDateInputRef.current.value;
    const enterPhone = phoneInputRef.current.value;
    const enterAddress = addressInputRef.current.value;

    try {
      const result = await axios.patch(`/api/employees/${numberId}`, {
        numberId,
        enterName,
        enterJobTitle,
        enterEmployment,
        enterPhone,
        enterAddress,
      });
      console.log(result);
      Toast.fire({
        icon: "success",
        title: "修改員工資料成功!",
      });
      onClick();
    } catch (error) {
      Toast.fire({
        icon: "warning",
        title: "修改員工資料失敗!",
      });
      console.log(error);
    }
  };
  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <form
        className={style.changeInformation_container}
        onSubmit={submitHandler}
      >
        <div className={style.info_data}>
          {employeeIdData && (
            <>
              <ChangeInfoCard
                fistText="員工編號"
                lastText={employeeIdData.numberId}
                type="number"
              />
              <ChangeInfoCard
                fistText="姓名"
                lastText={employeeIdData.name}
                inputRef={nameInputRef}
                type="text"
              />
              <ChangeInfoCard
                fistText="職稱"
                lastText={employeeIdData.jobTitle}
                inputRef={jobTitleInputRef}
                type="text"
              />
              <ChangeInfoCard
                fistText="入職日期"
                lastText={employeeIdData.employmentDate}
                inputRef={employmentDateInputRef}
                type="text"
              />
              <ChangeInfoCard
                fistText="手機"
                lastText={employeeIdData.phone}
                inputRef={phoneInputRef}
                type="tel"
              />
              <ChangeInfoCard
                fistText="居住地址"
                lastText={employeeIdData.address}
                inputRef={addressInputRef}
                type="text"
              />
            </>
          )}
        </div>
        <div className={style.info_ctrl}>
          <ButtonUI btnStyle="btn__pill" text="儲存" />
        </div>
      </form>
    </>
  );
}
export default ChangeInformation;
