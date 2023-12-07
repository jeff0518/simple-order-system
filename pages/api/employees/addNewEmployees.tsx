export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const {
    enterNumberId,
    enterName,
    enterJobTitle,
    enterEmployment,
    enterPhone,
    enterAddress,
  } = data;

  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("employees").insertOne({
    numberId: enterNumberId,
    name: enterName,
    jobTitle: enterJobTitle,
    employmentDate: enterEmployment,
    phone: enterPhone,
    address: enterAddress,
  });

  res.status(201).json({ message: "建立員工資料成功" });
  client.close();
}

export default handler;
