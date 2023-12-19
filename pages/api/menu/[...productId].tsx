export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "DELETE") {
    console.log("req.method錯誤");
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const data = req.query;
  const { productId } = data;
  if (productId === undefined) return;
  try {
    await db.collection("menu").deleteOne({ productId: productId[0] });

    res.status(200).json({ message: "菜品資料已成功刪除" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }

  client.close();
}
export default handler;
