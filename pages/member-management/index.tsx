import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Toast } from "@/utils/getSweetalert";
import { getMemberData } from "@/services/MemberAPI";
import useAuthCheck from "@/hooks/useAuthCheck";
import SearchForm from "@/components/search/SearchForm";

import style from "./index.module.scss";

function MemberManagement() {
  useAuthCheck();
  const [memberData, setMemberData] = useState<string | null>("");
  const router = useRouter();
  const queryMemberHandler = async () => {
    try {
      if (!memberData) return;
      const { data } = await getMemberData(memberData);
      const { phoneNumber } = data;
      Toast.fire({
        icon: "success",
        title: "登入成功!",
      });
      router.push({
        pathname: `/member-management/${phoneNumber}`,
        query: { data: JSON.stringify(data) },
      });
    } catch (error) {
      Toast.fire({
        icon: "warning",
        title: "員工編號輸入錯誤!",
      });
      console.log(error);
    }
  };
  useEffect(() => {
    queryMemberHandler();
  }, [memberData]);
  return (
    <div className={style.employee_container}>
      <SearchForm
        inputId="queryMember"
        inputPlaceholder="請輸入會員手機"
        inputText="會員:"
        setState={setMemberData}
        onClick={queryMemberHandler}
      />
    </div>
  );
}

export default MemberManagement;
