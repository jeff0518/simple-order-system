import InfoCard from "@/components/card/InfoCard";

import style from "./index.module.scss";
function MemberInfo() {
  return (
    <div className={style.memberInfo_container}>
      <InfoCard fistText="姓名" lastText="jeff" />
      <InfoCard fistText="會員手機" lastText="0987654321" />
      <InfoCard fistText="密碼" lastText="123456" />
      <InfoCard fistText="消費次數" lastText={20} />
      <InfoCard fistText="會員點數" lastText={3000} />
    </div>
  );
}
export default MemberInfo;
