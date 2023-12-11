export const config = {
  api: {
    externalResolver: true,
  },
};

import { connectToDatabase } from "@/services/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { numberId } = data;

  const client = await connectToDatabase();
  const db = client.db();
  const today = new Date().toLocaleDateString("zh-Tw");

  const existingDate = await db
    .collection("checkIn")
    .findOne({ clockRecords: { $elemMatch: { date: today } } });

  if (existingDate) {
    await db.collection("checkIn").updateOne(
      { numberId: numberId, "clockRecords.date": today },
      {
        $set: {
          "clockRecords.$.clockIn": new Date().toLocaleTimeString(),
        },
      }
    );
  } else {
    await db.collection("checkIn").updateOne(
      { numberId: numberId },
      {
        $push: {
          clockRecords: {
            date: today,
            clockIn: new Date().toLocaleTimeString(),
            clockOut: "",
          },
        },
      }
    );
  }

  res.status(201).json({ message: "上班打卡成功" });
  client.close();
}

export default handler;
