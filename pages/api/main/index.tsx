export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";
import moment from "moment";
import Cors from "cors";
import initMiddleware from "../../../utils/initMiddleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "PATCH", "OPTIONS"],
  })
);
async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);
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
    const { shoppingCar, tableId, totalAmount } = req.body;
    const diningTime = moment().format("LT");
    try {
      const existingTable = await db
        .collection("table")
        .findOne({ tableId: tableId });

      if (!existingTable) {
        res.status(404).json({ error: "找不到此桌子" });
        return;
      }

      if (existingTable.isActive === false) {
        const result = await db.collection("table").updateOne(
          { tableId: tableId },
          {
            $set: {
              isActive: true,
              totalAmount: totalAmount,
              shoppingCar: shoppingCar,
              diningTime: diningTime,
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
              shoppingCar: shoppingCar,
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
