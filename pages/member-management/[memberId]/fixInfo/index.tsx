import ButtonUI from "@/components/shared/ButtonUI";
import ChangeInfoCard from "@/components/card/ChangeInfoCard";
import InfoCard from "@/components/card/InfoCard";

import style from "./FixMemberInfo.module.scss";
function FixMemberInfo() {
  return (
    <form className={style.fixMemberInfo_container}>
      <div className={style.info_data}>
        <ChangeInfoCard type="string" fistText="姓名" lastText="jeff" />
        <ChangeInfoCard
          type="string"
          fistText="會員手機"
          lastText="0987654321"
        />
        <ChangeInfoCard type="string" fistText="密碼" lastText="123456" />
        <InfoCard fistText="消費次數" lastText={20} />
        <InfoCard fistText="會員點數" lastText={3000} />
      </div>
      <div className={style.info_ctrl}>
        <ButtonUI btnStyle="btn__pill" text="完成" onClick={() => {}} />
      </div>
    </form>
  );
}
export default FixMemberInfo;
