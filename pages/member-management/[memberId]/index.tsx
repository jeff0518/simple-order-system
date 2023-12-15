import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InfoCard from "@/components/card/InfoCard";
import ButtonUI from "@/components/shared/ButtonUI";
import SpendingRecordsCard from "@/components/card/SpendingRecordsCard";
import AddNewSpendingModal from "@/components/modal/member/AddNewSpendingModal";
import { getMemberData } from "@/services/MemberAPI";
import useAuthCheck from "@/hooks/useAuthCheck";

import style from "./index.module.scss";

interface MemberData {
  phoneNumber: string;
  name?: string;
  count?: string;
  point?: string;
  spendingRecords?: [
    {
      newDate: string;
      newPoint: string;
    }
  ];
}

const defaultValue = {
  phoneNumber: "",
  name: "",
  count: "",
  point: "",
  spendingRecords: [],
};

function MemberInfo() {
  useAuthCheck();
  const [isShowNewSpending, setIsShowNewSpending] = useState(false);
  const [memberData, setMemberData] = useState(defaultValue);
  const router = useRouter();

  const { name, phoneNumber, count, point, spendingRecords } = memberData;

  const fetchMemberData = async () => {
    try {
      const { data } = await getMemberData(phoneNumber);
      if (data) {
        setMemberData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModalHandler = () => {
    setIsShowNewSpending(false);
    fetchMemberData();
  };

  useEffect(() => {
    const { data } = router.query;
    const parsedMemberData = typeof data === "string" ? JSON.parse(data) : null;
    if (parsedMemberData !== null) {
      setMemberData(parsedMemberData);
    }
    fetchMemberData();
  }, []);

  return (
    <>
      {isShowNewSpending && (
        <AddNewSpendingModal
          phoneNumber={phoneNumber}
          onClick={closeModalHandler}
        />
      )}
      <div className={style.memberInfo_container}>
        <div className={style.container_info}>
          <div className={style.container_info_data}>
            <InfoCard fistText="姓名" lastText={name ? name : phoneNumber} />
            <InfoCard fistText="會員手機" lastText={phoneNumber} />
            <InfoCard fistText="消費次數" lastText={count ? count : 0} />
            <InfoCard fistText="會員點數" lastText={point ? point : 0} />
          </div>
          <div className={style.container_info_ctrlInterface}>
            <ButtonUI btnStyle="btn__pill" text="修改" onClick={() => {}} />
            <ButtonUI
              btnStyle="btn__pill"
              text="新增消費紀錄"
              onClick={() => {
                setIsShowNewSpending(true);
              }}
            />
          </div>
        </div>
        <div className={style.container_spendingRecords}>
          {/* <div className={style.spendingRecords_title}>
          <div className={style.date}>消費日期</div>
          <div className={style.point}>會員點數</div>
        </div> */}
          <div className={style.spendingRecords_info}>
            {spendingRecords ? (
              spendingRecords.map((item: any) => {
                return (
                  <SpendingRecordsCard time={item.date} spend={item.point} />
                );
              })
            ) : (
              <div className={style.text}>還沒有消費紀錄</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default MemberInfo;
