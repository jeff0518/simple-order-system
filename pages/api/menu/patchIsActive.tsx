export const config = {
  api: {
    externalResolver: true,
  },
};
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectToDatabase();
  const db = client.db();
  if (req.method !== "PATCH") {
    return;
  }
  const { productId, isActive } = req.body;
  try {
    const result = await db.collection("menu").updateOne(
      { productId: productId },
      {
        $set: { isActive: isActive },
      }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "找不到此商品" });
    }

    res.status(200).json({ message: "商品資料已成功更新" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export default handler;
