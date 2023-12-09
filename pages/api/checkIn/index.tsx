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

  const { numberId } = req.body;

  if (!numberId) {
    res.status(422).json({ message: "請輸入正確的員工編號" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existingFile = await db
    .collection("checkIn")
    .findOne({ numberId: numberId });

  console.log("existingFile 是：  " + existingFile);
  if (!existingFile) {
    const result = await db.collection("checkIn").insertOne({
      numberId: numberId,
      clockIn: {
        date: new Date().toLocaleString(),
      },
      clockOut: {
        date: "",
      },
    });
    console.log(result);
  }
  res.status(201).json({ message: "完成" });
  client.close();
}

export default handler;
