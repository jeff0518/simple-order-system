import InfoCard from "@/components/card/InfoCard";
import ButtonUI from "@/components/shared/ButtonUI";

import style from "./index.module.scss";

function Information() {
  return (
    <div className={style.info_container}>
      <div className={style.info_data}>
        <InfoCard fistText="姓名" lastText="jeff" />
        <InfoCard fistText="職稱" lastText="服務員" />
        <InfoCard fistText="入職日期" lastText="2021.12.12" />
        <InfoCard fistText="生日" lastText="1988.05.18" />
        <InfoCard fistText="手機" lastText="0972060603" />
        <InfoCard fistText="居住地址" lastText="台北市永和區" />
      </div>
      <div className={style.info_ctrl}>
        <ButtonUI btnStyle="btn__pill" text="修改" onClick={() => {}} />
        <ButtonUI btnStyle="btn__pill" text="刪除" onClick={() => {}} />
      </div>
    </div>
  );
}

export default Information;
