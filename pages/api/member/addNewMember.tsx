export const config = {
  api: {
    externalResolver: true,
  },
};

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phoneNumber } = req.body;

  const client = await connectToDatabase();
  const db = client.db();

  const existingFile = await db
    .collection("member")
    .findOne({ phoneNumber: phoneNumber });

  if (!existingFile) {
    await db.collection("member").insertOne({
      phoneNumber: phoneNumber,
      name: "",
      count: "",
      point: "",
      spendingRecords: [],
    });
    res.status(201).json({ message: "成功建立會員資料" });
  } else {
    res.status(201).json({ message: "已經有建立會員資料" });
  }
  client.close();
}

export default handler;
