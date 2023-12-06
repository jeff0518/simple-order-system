import { IoMdAdd } from "react-icons/io";
import { EmployeeProps } from "@/utils/type";
import { useState, useEffect } from "react";

import { getEmployeeData } from "@/services/getEmployeeData";
import ListCard from "@/components/card/ListCard";
import AddEmployeeModal from "@/components/modal/AddEmployeeModal";

import style from "./index.module.scss";

function Employee() {
  const [isAddEmployee, setIsAddEmployee] = useState(false);
  const [employeeData, setEmployeeData] = useState<EmployeeProps[]>([]);
  const [defaultValue, setDefaultValue] = useState<string>("00001");

  const fetchData = async () => {
    try {
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

  useEffect(() => {
    if (employeeData.length > 0) {
      let index = employeeData.length - 1;
      let lastEmployee = employeeData[index];

      if (lastEmployee && lastEmployee.numberId) {
        let changeNumber = Number(lastEmployee.numberId) + 1;
        let formattedNumber = String(changeNumber).padStart(5, "0");
        setDefaultValue(formattedNumber);
      }
    }
  }, [employeeData]);

  return (
    <>
      {isAddEmployee && (
        <AddEmployeeModal
          defaultValue={defaultValue}
          onClick={closeModalHandler}
        />
      )}
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
                key={item.numberId}
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
