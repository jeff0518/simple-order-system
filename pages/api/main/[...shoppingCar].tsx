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

  if (req.method === "GET") {
    const { shoppingCar } = req.query;
    if (shoppingCar === undefined) {
      return;
    }

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

  if (req.method === "PATCH") {
    const { tableId } = req.body;
    try {
      const result = await db.collection("table").updateOne(
        { tableId: tableId },
        {
          $set: {
            isActive: false,
            totalAmount: "",
            shoppingCar: [],
            diningTime: "",
          },
        }
      );
      res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  client.close();
}
export default handler;
