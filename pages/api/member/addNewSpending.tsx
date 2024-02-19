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
    methods: ["GET", "POST", "PATCH", "OPTIONS"],
  })
);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);
  const { phoneNumber, newPoint, newDate, newSpendingId } = req.body;

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
            spendingId: newSpendingId,
            date: newDate,
            point: newPoint,
          },
        },
        $set: {
          count: existingFile.count + 1,
          point: +existingFile.point + +newPoint,
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
