import axios from "axios";

interface MenuProps {
  productName: string;
  placeOfOrigin: string;
  sellingPrice: string;
  image: string | ArrayBuffer;
}

export async function createMenu({
  productName,
  placeOfOrigin,
  sellingPrice,
  image,
}: MenuProps) {
  try {
    const response = await axios.post("/api/menu/addNewMenu", {
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

export async function upload(formData: any) {
  console.log(formData);
  // try {
  //   const response = await axios.post("/api/menu/upload", {
  //     formData,
  //   });

  //   console.log(response);

  //   const data = await response.data;
  //   console.log(data);
  // } catch (error) {
  //   console.log(error);
  // }
}

// export async function createMenu() {
//   try {
//   } catch (error) {
//     console.log(error);
//   }
// }
