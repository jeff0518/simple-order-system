export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await connectToDatabase();
  const db = client.db();

  if (req.method === "GET") {
    const { memberId } = req.query;
    if (memberId === undefined) return;
    try {
      const result = await db
        .collection("member")
        .findOne({ phoneNumber: memberId[0] });

      if (!result) {
        res.status(404).json({ error: "找不到此會員" });
      } else {
        res.status(200).json({ data: result });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
export default handler;
