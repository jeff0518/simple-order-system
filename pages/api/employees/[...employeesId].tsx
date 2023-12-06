export const config = {
  api: {
    externalResolver: true,
  },
};

import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    console.log("有進來api");
    const client = await connectToDatabase();
    const db = client.db();
    const { employeesId } = req.query;
    if (employeesId === undefined) return;
    try {
      const result = await db
        .collection("employees")
        .findOne({ numberId: employeesId[0] });

      console.log(result);

      if (!result) {
        res.status(404).json({ error: "找不到此員工" });
      } else {
        res.status(200).json({ data: result });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }

    client.close();
  }

  if (req.method === "PUT") {
  }

  if (req.method === "DELETE") {
  }
}

export default handler;
