import axios from "axios";
import { ShoppingCarProps } from "@/utils/type";

export async function postShoppingCar(props: ShoppingCarProps[]) {
  try {
    console.log(props);
    // const response = await axios.post("", {});

    // const data = response.data;

    // if (response.status >= 200 && response.status < 300) {
    //   return data;
    // } else {
    //   throw new Error(data.message || "Something went wrong");
    // }
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
