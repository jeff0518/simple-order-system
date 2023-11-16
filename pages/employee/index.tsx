import SearchForm from "@/components/search/SearchForm";

import style from "./index.module.scss";

function Employee() {
  const queryEmployeeIdHandler = () => {};
  return (
    <div className={style.employee_container}>
      <SearchForm
        inputId="queryEmployeeId"
        inputPlaceholder="請輸入員工編號"
        inputText="員工編號:"
        onClick={queryEmployeeIdHandler}
      />
    </div>
  );
}

export default Employee;
