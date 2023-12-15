import { useRef } from "react";

import { FormEvent } from "@/utils/type";
import { Toast } from "@/utils/getSweetalert";
import { patchMemberData } from "@/services/MemberAPI";
import ButtonUI from "@/components/shared/ButtonUI";
import ChangeInfoCard from "@/components/card/ChangeInfoCard";
import InfoCard from "@/components/card/InfoCard";

import style from "./FixMemberInfo.module.scss";

interface FixMemberProps {
  phoneNumber: string;
  name: string;
  onClick: () => void;
}

function FixMemberInfo({ onClick, phoneNumber, name }: FixMemberProps) {
  const nameInputRef = useRef<HTMLInputElement>(null!);
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (!nameInputRef.current) {
      console.log("未補抓到InputRef");
      Toast.fire({
        icon: "warning",
        title: "輸入欄位填寫不完全!",
      });
      return;
    }

    const newName = nameInputRef.current.value;
    console.log(newName);
    try {
      const result = await patchMemberData({
        phoneNumber,
        newName,
      });
      console.log(result);
      Toast.fire({
        icon: "success",
        title: "修改成功!",
      });
      onClick();
    } catch (error) {
      console.log(error);
      Toast.fire({
        icon: "warning",
        title: "修改失敗！",
      });
    }
  };
  return (
    <>
      <div className={style.backdrop} onClick={onClick} />
      <form className={style.fixMemberInfo_container} onSubmit={submitHandler}>
        <div className={style.info_data}>
          <ChangeInfoCard
            type="text"
            inputRef={nameInputRef}
            fistText="姓名"
            lastText={name}
          />
          <InfoCard fistText="會員手機" lastText={phoneNumber} />
        </div>
        <div className={style.info_ctrl}>
          <ButtonUI btnStyle="btn__pill" text="完成" />
        </div>
      </form>
    </>
  );
}
export default FixMemberInfo;
