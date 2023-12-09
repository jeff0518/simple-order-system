import axios from "axios";

export async function createCheckInFile(numberId: string) {
  try {
    const response = await axios.post("/api/checkIn", {
      numberId: numberId,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
