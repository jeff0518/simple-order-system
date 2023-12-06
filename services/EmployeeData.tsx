import axios from "axios";

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
