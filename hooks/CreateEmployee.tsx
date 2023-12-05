import axios from "axios";

export async function CreateEmployee(
  name: string,
  jobTitle: string,
  employmentDate: string,
  birthday: string,
  phone: string,
  address: string
) {
  try {
    const response = await axios.post("/api/employees/addNewEmployees", {
      name,
      jobTitle,
      employmentDate,
      birthday,
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
