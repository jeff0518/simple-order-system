import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/router";
import ListCard from "@/components/card/ListCard";

import style from "./index.module.scss";

function Employee() {
  const router = useRouter();
  return (
    <div className={style.employee_container}>
      <div className={style.addImage}>
        <button
          className={style.addImage__btn}
          onClick={() => {
            router.replace("/employee/addNewEmployee");
          }}
        >
          <IoMdAdd size={50} />
        </button>
      </div>
      <div className={style.employeeBox}>
        <ListCard jobTitle="服務員" name="Jeff" />
      </div>
    </div>
  );
}

export default Employee;
