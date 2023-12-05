import axios from "axios";

export const getEmployeeData = async () => {
  try {
    const { data } = await axios.get("/api/employees");
    return data;
  } catch (error) {
    console.log(error);
  }
};
