import axios from "axios";

export async function CreateUser(account: string, password: string) {
  try {
    // const response = await fetch("/api/auth/signup", {
    //   method: "POST",
    //   body: JSON.stringify({ account, password }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();

    // if (!response.ok) {
    //   throw new Error(data.message || "Something went wrong");
    // }
    const response = await axios.post("/api/auth/signup", {
      account: account,
      password: password,
    });

    const data = response.data;

    if (response.status !== 200) {
      throw new Error(data.message || "Something went wrong");
    }
    console.log(data);

    return data;
  } catch (error) {
    // 處理錯誤
    console.error(error);
    throw new Error("Something went wrong");
  }
}
