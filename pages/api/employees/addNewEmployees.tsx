export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const { numberId, name, jobTitle, employmentDate, phone, address } = data;

  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("employees").insertOne({
    numberId: numberId,
    name: name,
    jobTitle: jobTitle,
    employmentDate: employmentDate,
    phone: phone,
    address: address,
  });

  res.status(201).json({ message: "建立員工資料成功" });
  client.close();
}

export default handler;
