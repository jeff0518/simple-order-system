import ButtonUI from "@/components/shared/ButtonUI";
import ChangeInfoCard from "@/components/card/ChangeInfoCard";

import style from "./AddSpendInfo.module.scss";
function AddSpendInfo() {
  return (
    <form className={style.addSpendInfo_container}>
      <div className={style.info_data}>
        <ChangeInfoCard type="date" fistText="消費日期" lastText="" />
        <ChangeInfoCard type="number" fistText="消費金額" lastText={0} />
      </div>
      <div className={style.info_ctrl}>
        <ButtonUI btnStyle="btn__pill" text="新增" onClick={() => {}} />
      </div>
    </form>
  );
}
export default AddSpendInfo;
