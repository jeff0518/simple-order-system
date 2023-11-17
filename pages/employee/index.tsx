import ListCard from "@/components/card/ListCard";
import style from "./index.module.scss";

function Employee() {
  return (
    <div className={style.employee_container}>
      <ListCard jobTitle="服務員" name="Jeff" />
    </div>
  );
}

export default Employee;
