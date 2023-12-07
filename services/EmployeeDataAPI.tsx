import axios from "axios";

interface EmployeeProps {
  numberId?: string;
  enterNumberId?: string;
  enterName: string;
  enterJobTitle: string;
  enterEmployment: string;
  enterPhone: string;
  enterAddress: string;
}

export async function createEmployee(props: EmployeeProps) {
  const {
    enterNumberId,
    enterName,
    enterJobTitle,
    enterEmployment,
    enterPhone,
    enterAddress,
  } = props;
  try {
    const response = await axios.post("/api/employees/addNewEmployees", {
      enterNumberId,
      enterName,
      enterJobTitle,
      enterEmployment,
      enterPhone,
      enterAddress,
    });

    const data = response.data;

    if (response.status >= 200 && response.status < 300) {
      return data;
    } else {
      throw new Error(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
}

export const getAllEmployeeData = async () => {
  try {
    const { data } = await axios.get("/api/employees");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getNumberIdEmployeeData = async (numberId: string) => {
  try {
    const { data } = await axios.get(`/api/employees/${numberId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const patchEmployeeData = async (props: EmployeeProps) => {
  const {
    numberId,
    enterName,
    enterJobTitle,
    enterEmployment,
    enterPhone,
    enterAddress,
  } = props;
  try {
    const { data } = await axios.patch(`/api/employees/${numberId}`, {
      numberId,
      enterName,
      enterJobTitle,
      enterEmployment,
      enterPhone,
      enterAddress,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployeeData = async (numberId: string) => {
  try {
    const { data } = await axios.delete(`/api/employees/${numberId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
