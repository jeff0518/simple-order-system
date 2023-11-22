import InfoCard from "@/components/card/InfoCard";
import ButtonUI from "@/components/shared/ButtonUI";
import SpendingRecordsCard from "@/components/card/SpendingRecordsCard";

import style from "./index.module.scss";
function MemberInfo() {
  return (
    <div className={style.memberInfo_container}>
      <div className={style.container_info}>
        <div className={style.container_info_data}>
          <InfoCard fistText="姓名" lastText="jeff" />
          <InfoCard fistText="會員手機" lastText="0987654321" />
          <InfoCard fistText="密碼" lastText="123456" />
          <InfoCard fistText="消費次數" lastText={20} />
          <InfoCard fistText="會員點數" lastText={3000} />
        </div>
        <div className={style.container_info_ctrlInterface}>
          <ButtonUI btnStyle="btn__pill" text="修改" onClick={() => {}} />
          <ButtonUI
            btnStyle="btn__pill"
            text="新增消費紀錄"
            onClick={() => {}}
          />
        </div>
      </div>
      <div className={style.container_spendingRecords}>
        <div className={style.spendingRecords_title}>
          <div className={style.date}>消費日期</div>
          <div className={style.point}>會員點數</div>
        </div>
        <div className={style.spendingRecords_info}>
          <SpendingRecordsCard time="2023.11.2" spend={1467} />
          <SpendingRecordsCard time="2023.11.3" spend={1567} />
          <SpendingRecordsCard time="2023.11.7" spend={1167} />
          <SpendingRecordsCard time="2023.11.11" spend={2467} />
          <SpendingRecordsCard time="2023.11.18" spend={467} />
          <SpendingRecordsCard time="2023.11.2" spend={1467} />
          <SpendingRecordsCard time="2023.11.3" spend={1567} />
          <SpendingRecordsCard time="2023.11.7" spend={1167} />
          <SpendingRecordsCard time="2023.11.11" spend={2467} />
          <SpendingRecordsCard time="2023.11.18" spend={467} />
          <SpendingRecordsCard time="2023.11.2" spend={1467} />
          <SpendingRecordsCard time="2023.11.3" spend={1567} />
          <SpendingRecordsCard time="2023.11.7" spend={1167} />
          <SpendingRecordsCard time="2023.11.11" spend={2467} />
          <SpendingRecordsCard time="2023.11.18" spend={467} />
        </div>
      </div>
    </div>
  );
}
export default MemberInfo;
