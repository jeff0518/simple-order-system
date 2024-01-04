import { IoMdAdd } from "react-icons/io";
import { EmployeeProps } from "@/utils/type";
import { useState, useEffect } from "react";

import { getAllEmployeeData } from "@/services/EmployeeDataAPI";
import useAuthCheck from "@/hooks/useAuthCheck";
import ListCard from "@/components/card/ListCard";
import AddEmployeeModal from "@/components/modal/employee/AddEmployeeModal";
import Loading from "@/components/loading/Loading";

import style from "./index.module.scss";

function Employee() {
  const [dataUpdate, setDataUpdate] = useState(false);
  const [isAddEmployee, setIsAddEmployee] = useState(false);
  const [employeeData, setEmployeeData] = useState<EmployeeProps[]>([]);
  const [defaultValue, setDefaultValue] = useState<string>("00001");
  const [isLoading, setIsLoading] = useState(true);
  useAuthCheck();
  const fetchData = async () => {
    try {
      const data = await getAllEmployeeData();
      setEmployeeData(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const closeModalHandler = () => {
    setIsAddEmployee(false);
    setDataUpdate((prev) => !prev);
  };

  useEffect(() => {
    fetchData();
  }, [dataUpdate]);

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
        {isLoading && <Loading />}
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
                setDataUpdate={setDataUpdate}
                dataUpdate={dataUpdate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Employee;
