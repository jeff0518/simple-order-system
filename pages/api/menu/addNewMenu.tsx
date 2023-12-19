export const config = {
  api: {
    externalResolver: true,
    bodyParser: {
      sizeLimit: "3mb", // 設定請求體大小限制，這裡設定為 10MB，你可以根據需求調整
    },
  },
};

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { productId, productName, placeOfOrigin, sellingPrice, image } =
    req.body;
  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("menu").insertOne({
    productId: productId,
    name: productName,
    place: placeOfOrigin,
    selling: sellingPrice,
    imageUrl: image,
    isActive: true,
  });
  console.log(result);
  res.status(201).json({ message: "建立菜單成功" });

  client.close();
}

export default handler;
