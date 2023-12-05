export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("有進來api");
  if (req.method !== "GET") {
    console.log("req.method錯誤");
    return;
  }
  console.log("通過api檢查");

  const client = await connectToDatabase();
  const db = client.db();
  const result = await db.collection("employees").find().toArray();

  res.status(200).json({ data: result });
  client.close();
}

export default handler;
