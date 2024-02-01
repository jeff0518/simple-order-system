import { useRef } from "react";
import moment from "moment";

import { FormEvent } from "@/utils/type";
import { Toast } from "@/utils/getSweetalert";
import { createNewSpending } from "@/services/MemberAPI";
import InputUI from "@/components/shared/InputUI";
import ButtonUI from "@/components/shared/ButtonUI";
import style from "./AddNewSpendingModal.module.scss";

interface SpendingProps {
  phoneNumber: string;
  onClick: () => void;
}
function AddNewSpendingModal({ phoneNumber, onClick }: SpendingProps) {
  const dateInputRef = useRef<HTMLInputElement>(null!);
  const pointInputRef = useRef<HTMLInputElement>(null!);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (!dateInputRef.current || !pointInputRef.current) {
      console.log("未補抓到InputRef");
      Toast.fire({
        icon: "warning",
        title: "輸入欄位填寫不完全!",
      });
      return;
    }

    const time = moment().format("hmmss");

    const newDate = dateInputRef.current.value;
    const newPoint = pointInputRef.current.value;
    const newSpendingId = newDate + time;

    try {
      const result = await createNewSpending({
        phoneNumber,
        newSpendingId,
        newPoint,
        newDate,
      });
      console.log(result);
      Toast.fire({
        icon: "success",
        title: "建立消費紀錄成功!",
      });
      onClick();
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "warning",
        title: "建立消費紀錄失敗！",
      });
    }
  };
  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <div className={style.addNewSpendingModal_container}>
        <form className={style.form} onSubmit={submitHandler}>
          <div className={style.info_data}>
            <InputUI
              inputId="spendingDate"
              inputPlaceholder="請輸入消費日期"
              inputRef={dateInputRef}
              inputStyle="input_modal"
              inputText="消費日期:"
              inputType="date"
            />
            <InputUI
              inputId="spendingPoint"
              inputPlaceholder="請輸入消費點數"
              inputRef={pointInputRef}
              inputStyle="input_modal"
              inputText="消費點數:"
              inputType="number"
            />
          </div>
          <div className={style.info_ctrl}>
            <ButtonUI btnStyle="btn__pill" text="新增消費紀錄" />
          </div>
        </form>
      </div>
    </>
  );
}
export default AddNewSpendingModal;
