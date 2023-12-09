import { useEffect, useState } from "react";
import { getNumberIdEmployeeData } from "@/services/EmployeeDataAPI";
import { createCheckInFile } from "@/services/CheckInAPI";
import { Toast } from "@/utils/getSweetalert";
import SearchForm from "@/components/search/SearchForm";
import CheckInModal from "./CheckInModal";

import style from "./SearchEmployeeModal.module.scss";

interface SearchEmployeeProps {
  isShowSearch: boolean;
  setIsShowSearch: (isShowSearch: boolean) => void;
  setIsShowCheckIn: (isShowCheckIn: boolean) => void;
}

const defaultValue = { name: "", numberId: "" };

function SearchEmployeeModal({
  isShowSearch,
  setIsShowSearch,
  setIsShowCheckIn,
}: SearchEmployeeProps) {
  const [employeeId, setEmployeeId] = useState<string | null>("");
  const [checkInData, setCheckInData] = useState(defaultValue);
  const checkInHandler = async () => {
    // 抓api，成功才執行下面code
    try {
      if (!employeeId) return;
      const { data } = await getNumberIdEmployeeData(employeeId);
      const result = await createCheckInFile(data.numberId);
      console.log(result);
      setCheckInData({
        name: data.name,
        numberId: data.numberId,
      });
      Toast.fire({
        icon: "success",
        title: "登入成功!",
      });
      setIsShowSearch(false);
    } catch (error) {
      Toast.fire({
        icon: "warning",
        title: "員工編號輸入錯誤!",
      });
      console.log(error);
    }
  };
  const closeModalHandler = () => {
    setIsShowCheckIn(false);
    setEmployeeId(null);
    setCheckInData(defaultValue);
  };

  useEffect(() => {
    checkInHandler();
  }, [employeeId]);
  return (
    <>
      <div className={style.backdrop} onClick={closeModalHandler} />
      <div className={style.searchEmployeeModal_container}>
        {isShowSearch ? (
          <SearchForm
            inputId="searchEmployee"
            inputPlaceholder="請輸入員工編號"
            inputText="員工編號: "
            setEmployeeId={setEmployeeId}
            onClick={checkInHandler}
          />
        ) : (
          <CheckInModal checkInData={checkInData} />
        )}
      </div>
    </>
  );
}
export default SearchEmployeeModal;
