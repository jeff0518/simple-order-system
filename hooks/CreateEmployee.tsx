import axios from "axios";

export async function CreateEmployee(
  numberId: string,
  name: string,
  jobTitle: string,
  employmentDate: string,
  phone: string,
  address: string
) {
  try {
    const response = await axios.post("/api/employees/addNewEmployees", {
      numberId,
      name,
      jobTitle,
      employmentDate,
      phone,
      address,
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
