export const config = {
  api: {
    externalResolver: true,
  },
};

import { connectToDatabase } from "@/services/db";
import type { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectToDatabase();
  const db = client.db();

  if (req.method === "GET") {
    const { checkId } = req.query;
    if (checkId === undefined) return;
    try {
      const result = await db
        .collection("checkIn")
        .findOne({ numberId: checkId[0] });

      if (!result) {
        res.status(404).json({ error: "找不到此員工" });
      } else {
        res.status(200).json({ data: result });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
export default handler;
