import axios from "axios";

interface MenuProps {
  productId: string;
  productName?: string;
  placeOfOrigin?: string;
  sellingPrice?: string;
  image?: string | ArrayBuffer;
  isActive?: boolean;
}

export async function createMenu({
  productId,
  productName,
  placeOfOrigin,
  sellingPrice,
  image,
}: MenuProps) {
  try {
    const response = await axios.post("/api/menu/addNewMenu", {
      productId,
      productName,
      placeOfOrigin,
      sellingPrice,
      image,
    });
    const data = response.data;

    if (response.status >= 200 && response.status < 300) {
      return data;
    } else {
      throw new Error(data.message || "Something went wrong");
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
}

export async function getMenu() {
  try {
    const { data } = await axios.get("/api/menu");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function patchIsActive({ productId, isActive }: MenuProps) {
  try {
    const { data } = await axios.patch("/api/menu/patchIsActive", {
      productId,
      isActive,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const deleteMenu = async (productId: string) => {
  try {
    const { data } = await axios.delete(`/api/menu/${productId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
