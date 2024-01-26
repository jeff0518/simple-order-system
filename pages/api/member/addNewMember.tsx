export const config = {
  api: {
    externalResolver: true,
  },
};

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";
import Cors from "cors";
import initMiddleware from "../../../utils/initMiddleware";

const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"],
  })
);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);
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
      count: 0,
      point: 0,
      spendingRecords: [],
    });
    res.status(201).json({ message: "成功建立會員資料" });
  } else {
    res.status(201).json({ message: "已經有建立會員資料" });
  }
  client.close();
}

export default handler;
