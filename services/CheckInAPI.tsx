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

export async function getClockIn(numberId: string) {
  try {
    const response = await axios.post("/api/checkIn/clockIn", {
      numberId: numberId,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getClockOut(numberId: string) {
  try {
    const response = await axios.post("/api/checkIn/clockOut", {
      numberId: numberId,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
