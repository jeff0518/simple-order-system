export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";
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
    const { memberId } = req.query;
    if (memberId === undefined) return;
    try {
      const result = await db
        .collection("member")
        .findOne({ phoneNumber: memberId[0] });

      if (!result) {
        res.status(404).json({ error: "找不到此會員" });
      } else {
        res.status(200).json({ data: result });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "PATCH") {
    const data = req.body;
    const { newName, phoneNumber } = data;

    try {
      const result = await db.collection("member").updateOne(
        { phoneNumber: phoneNumber },
        {
          $set: {
            name: newName,
          },
        }
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: "找不到此員工" });
      }

      res.status(200).json({ message: "員工資料已成功更新" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
export default handler;
