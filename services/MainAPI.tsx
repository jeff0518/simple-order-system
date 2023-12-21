import axios from "axios";

export const getTableData = async () => {
  try {
    const { data } = await axios.get("/api/main");
    return data;
  } catch (error) {
    console.log(error);
  }
};
