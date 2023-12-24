import axios from "axios";
import { ShoppingCarProps } from "@/utils/type";

export async function patchShoppingCar(props: ShoppingCarProps[]) {
  try {
    const { items, tableId, totalAmount } = props[0];
    const response = await axios.patch("/api/main", {
      items,
      tableId,
      totalAmount,
    });

    const data = response.data;

    if (response.status >= 200 && response.status < 300) {
      return data;
    } else {
      throw new Error(data.message || "Something went wrong");
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
