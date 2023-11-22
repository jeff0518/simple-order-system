import ChangeInfoCard from "@/components/card/ChangeInfoCard";
import ButtonUI from "@/components/shared/ButtonUI";

import style from "./ChangeInformation.module.scss";
function ChangeInformation() {
  return (
    <div className={style.changeInformation_container}>
      <div className={style.info_data}>
        <ChangeInfoCard fistText="姓名" lastText="jeff" type="string" />
        <ChangeInfoCard fistText="職稱" lastText="服務員" type="string" />
        <ChangeInfoCard
          fistText="入職日期"
          lastText="2021.12.12"
          type="string"
        />
        <ChangeInfoCard fistText="生日" lastText="1988.05.18" type="string" />
        <ChangeInfoCard fistText="手機" lastText="0972060603" type="number" />
        <ChangeInfoCard
          fistText="居住地址"
          lastText="台北市永和區"
          type="string"
        />
      </div>
      <div className={style.info_ctrl}>
        <ButtonUI btnStyle="btn__pill" text="完成" onClick={() => {}} />
      </div>
    </div>
  );
}
export default ChangeInformation;
