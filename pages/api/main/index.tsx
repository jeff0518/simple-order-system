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
    try {
      const result = await db.collection("table").find().toArray();

      res.status(200).json({ data: result });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "PATCH") {
    const { items, tableId, totalAmount } = req.body;
    try {
      const existingTable = await db
        .collection("table")
        .findOne({ tableId: tableId });

      if (!existingTable) {
        res.status(404).json({ error: "找不到此桌子" });
        return;
      }

      console.log(existingTable.isActive);

      console.log(typeof existingTable.isActive);

      if (existingTable.isActive === false) {
        const result = await db.collection("table").updateOne(
          { tableId: tableId },
          {
            $set: {
              isActive: true,
              totalAmount: totalAmount,
              shoppingCar: items,
              diningTime: new Date().toLocaleTimeString(),
            },
          }
        );
        res.status(200).json({ data: result });
      } else {
        const result = await db.collection("table").updateOne(
          { tableId: tableId },
          {
            $set: {
              totalAmount: totalAmount,
              shoppingCar: items,
            },
          }
        );
        res.status(200).json({ data: result });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  client.close();
}

export default handler;
