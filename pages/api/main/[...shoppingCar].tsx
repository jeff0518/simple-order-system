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
  console.log("有進來！");
  if (req.method === "GET") {
    const { shoppingCar } = req.query;
    if (shoppingCar === undefined) {
      return;
    }
    console.log("data", shoppingCar);
    try {
      const result = await db
        .collection("table")
        .findOne({ tableId: shoppingCar[0] });

      if (!result) {
        res.status(404).json({ error: "找不到此桌子" });
      } else {
        res.status(200).json({ data: result });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
export default handler;
