import SearchForm from "@/components/search/SearchForm";
import CheckInModal from "./CheckInModal";

import style from "./SearchEmployeeModal.module.scss";

interface SearchEmployeeProps {
  isShowSearch: boolean;
  setIsShowSearch: (isShowSearch: boolean) => void;
  setIsShowCheckIn: (isShowCheckIn: boolean) => void;
}
function SearchEmployeeModal({
  isShowSearch,
  setIsShowSearch,
  setIsShowCheckIn,
}: SearchEmployeeProps) {
  const checkInHandler = () => {
    // 抓api，成功才執行下面code
    setIsShowSearch(false);
  };
  const closeModalHandler = () => {
    setIsShowCheckIn(false);
  };
  return (
    <>
      <div className={style.backdrop} onClick={closeModalHandler} />
      <div className={style.searchEmployeeModal_container}>
        {isShowSearch ? (
          <SearchForm
            inputId="searchEmployee"
            inputPlaceholder="請輸入員工編號"
            inputText="員工編號: "
            onClick={checkInHandler}
          />
        ) : (
          <CheckInModal />
        )}
      </div>
    </>
  );
}
export default SearchEmployeeModal;
