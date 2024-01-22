export const config = {
  api: {
    externalResolver: true,
  },
};

import { connectToDatabase } from "@/services/db";
import { hashPassword } from "@/services/auth";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;
  const { account, password } = data;

  if (!account || !password) {
    res.status(422).json({ message: "請輸入正確的帳號密碼" });
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db
    .collection("user")
    .findOne({ account: account });
  if (existingUser) {
    res.status(422).json({ message: "用戶已存在" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  const result = await db.collection("user").insertOne({
    account: account,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
