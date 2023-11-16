import SearchForm from "@/components/search/SearchForm";

import style from "./index.module.scss";

function MemberManagement() {
  const queryMemberHandler = () => {};
  return (
    <div className={style.employee_container}>
      <SearchForm
        inputId="queryMember"
        inputPlaceholder="請輸入會員手機"
        inputText="會員:"
        onClick={queryMemberHandler}
      />
    </div>
  );
}

export default MemberManagement;
