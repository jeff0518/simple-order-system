import axios from "axios";
import { ShoppingCarProps } from "@/utils/type";

interface PatchProps {
  tableId: string;
  items: [
    {
      productId: string;
      name: string;
      quantity: number;
      selling: string;
    }
  ];
  totalAmount: number;
}

export async function getShoppingCar(tableId: string) {
  try {
    const { data } = await axios.get(`/api/main/${tableId}`);
    return data;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function patchShoppingCar(props: PatchProps[]) {
  try {
    const { items, tableId, totalAmount } = props[0];
    const response = await axios.patch("/api/main", {
      items,
      tableId,
      totalAmount,
    });

    console.log(response);

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
