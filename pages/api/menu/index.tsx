export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    console.log("req.method錯誤");
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();

  try {
    const result = await db.collection("menu").find().toArray();

    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }

  client.close();
}

export default handler;
