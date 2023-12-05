import { IoMdAdd } from "react-icons/io";
import { EmployeeProps } from "@/utils/type";
import { useState, useEffect } from "react";

import { getEmployeeData } from "@/services/getEmployeeData";
import ListCard from "@/components/card/ListCard";
import AddEmployeeModal from "@/components/modal/AddEmployeeModal";

import style from "./index.module.scss";

function Employee() {
  const [isAddEmployee, setIsAddEmployee] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);

  const fetchData = async () => {
    try {
      console.log("有執行fetch");
      const data = await getEmployeeData();
      setEmployeeData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModalHandler = () => {
    setIsAddEmployee(false);
  };

  useEffect(() => {
    fetchData();
  }, [isAddEmployee]);

  return (
    <>
      {isAddEmployee && <AddEmployeeModal onClick={closeModalHandler} />}
      <div className={style.employee_container}>
        <div className={style.addImage}>
          <button
            className={style.addImage__btn}
            onClick={() => {
              setIsAddEmployee(true);
            }}
          >
            <IoMdAdd size={50} />
          </button>
        </div>
        <div className={style.employeeBox}>
          {employeeData.map((item: EmployeeProps) => {
            return (
              <ListCard
                numberId={item.numberId}
                jobTitle={item.jobTitle}
                name={item.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Employee;
