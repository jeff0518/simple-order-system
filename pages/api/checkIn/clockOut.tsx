export const config = {
  api: {
    externalResolver: true,
  },
};

import { connectToDatabase } from "@/services/db";
import type { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { numberId } = data;

  const client = await connectToDatabase();
  const db = client.db();
  const today = new Date().toLocaleDateString("zh-Tw");
  const clockOutTime = moment().format("LT");

  const existingDate = await db
    .collection("checkIn")
    .findOne({ clockRecords: { $elemMatch: { date: today } } });

  if (existingDate) {
    await db.collection("checkIn").updateOne(
      { numberId: numberId, "clockRecords.date": today },
      {
        $set: {
          "clockRecords.$.clockOut": clockOutTime,
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
            clockIn: "",
            clockOut: clockOutTime,
          },
        },
      }
    );
  }

  res.status(201).json({ message: "下班打卡成功" });
  client.close();
}

export default handler;
