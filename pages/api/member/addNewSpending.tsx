export const config = {
  api: {
    externalResolver: true,
  },
};

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phoneNumber, newPoint, newDate } = req.body;

  const client = await connectToDatabase();
  const db = client.db();

  const existingFile = await db
    .collection("member")
    .findOne({ phoneNumber: phoneNumber });

  if (existingFile) {
    await db.collection("member").updateOne(
      {
        phoneNumber: phoneNumber,
      },
      {
        $push: {
          spendingRecords: {
            date: newDate,
            point: newPoint,
          },
        },
      }
    );
    res.status(201).json({ message: "成功新增消費紀錄" });
  } else {
    res.status(401).json({ message: "沒有找到會員資料" });
  }
  client.close();
}

export default handler;
