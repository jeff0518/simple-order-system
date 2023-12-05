export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const { name, jobTitle, employmentDate, birthday, phone, address } = data;

  const client = await connectToDatabase();
  const db = client.db();

  const result = await db.collection("employees").insertOne({
    name: name,
    jobTitle: jobTitle,
    employmentDate: employmentDate,
    birthday: birthday,
    phone: phone,
    address: address,
  });

  console.log(result);

  res.status(201).json({ message: "建立員工資料成功" });
  client.close();
}

export default handler;
