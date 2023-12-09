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

  const existingUser = await db
    .collection("checkIn")
    .findOne({ numberId: numberId });
  if (existingUser) {
    // 打上班卡
  } else {
    const result = await db.collection("checkIn").insertOne({
      // 新增資料夾並打上班卡
      numberId: numberId,
    });
  }

  res.status(201).json({ message: "" });
  client.close();
}

export default handler;
