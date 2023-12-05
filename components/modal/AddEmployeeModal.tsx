import { useRef } from "react";
import { FormEvent } from "@/utils/type";
import { CreateEmployee } from "@/hooks/CreateEmployee";
import { Toast } from "@/utils/getSweetalert";

import InputUI from "@/components/shared/InputUI";
import ButtonUI from "@/components/shared/ButtonUI";

import style from "./AddEmployeeModal.module.scss";

interface Props {
  onClick: () => void;
}

function AddEmployeeModal({ onClick }: Props) {
  const numberIdInputRef = useRef<HTMLInputElement>(null!);
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
      !numberIdInputRef.current ||
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

    const enterNumberId = numberIdInputRef.current.value;
    const enterName = nameInputRef.current.value;
    const enterJobTitle = jobTitleInputRef.current.value;
    const enterEmployment = employmentDateInputRef.current.value;
    const enterPhone = phoneInputRef.current.value;
    const enterAddress = addressInputRef.current.value;

    try {
      const result = await CreateEmployee(
        enterNumberId,
        enterName,
        enterJobTitle,
        enterEmployment,
        enterPhone,
        enterAddress
      );
      console.log(result);
      Toast.fire({
        icon: "success",
        title: "建立員工資料成功!",
      });
      onClick();
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "warning",
        title: "建立員工失敗！",
      });
    }
  };
  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.addEmployeeModal_container}>
        <form className={style.form} onSubmit={submitHandler}>
          <div className={style.info_data}>
            <InputUI
              inputId="numberId"
              inputPlaceholder="請輸入員工編號"
              inputRef={numberIdInputRef}
              inputStyle="input_control"
              inputText="員工編號:"
              inputType="number"
            />
            <InputUI
              inputId="name"
              inputPlaceholder="請輸入員工姓名"
              inputRef={nameInputRef}
              inputStyle="input_control"
              inputText="姓名:"
              inputType="text"
            />
            <InputUI
              inputId="jobTitle"
              inputPlaceholder="請輸入員工職稱"
              inputRef={jobTitleInputRef}
              inputStyle="input_control"
              inputText="職稱:"
              inputType="text"
            />
            <InputUI
              inputId="employmentDate"
              inputPlaceholder="請輸入員工入職日期"
              inputRef={employmentDateInputRef}
              inputStyle="input_control"
              inputText="入職日期:"
              inputType="date"
            />

            <InputUI
              inputId="phone"
              inputPlaceholder="請輸入員工手機:09XXXXXXXX"
              inputRef={phoneInputRef}
              inputStyle="input_control"
              inputText="手機:"
              inputType="tel"
              inputMaxLength={10}
              inputPattern="[0-9]*"
            />
            <InputUI
              inputId="address"
              inputPlaceholder="請輸入員工居住地址"
              inputRef={addressInputRef}
              inputStyle="input_control"
              inputText="居住地址:"
              inputType="text"
            />
          </div>
          <div className={style.info_ctrl}>
            <ButtonUI btnStyle="btn__pill" text="新增員工" />
          </div>
        </form>
      </div>
    </>
  );
}
export default AddEmployeeModal;
