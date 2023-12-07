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
    const { employeesId } = req.query;
    if (employeesId === undefined) return;
    try {
      const result = await db
        .collection("employees")
        .findOne({ numberId: employeesId[0] });

      if (!result) {
        res.status(404).json({ error: "找不到此員工" });
      } else {
        res.status(200).json({ data: result });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "PATCH") {
    const data = req.body;
    const {
      numberId,
      enterName,
      enterJobTitle,
      enterEmployment,
      enterPhone,
      enterAddress,
    } = data;

    try {
      const result = await db.collection("employees").updateOne(
        { numberId: numberId },
        {
          $set: {
            name: enterName,
            jobTitle: enterJobTitle,
            employmentDate: enterEmployment,
            phone: enterPhone,
            address: enterAddress,
          },
        }
      );

      if (result.modifiedCount === 0) {
        return res.status(404).json({ error: "找不到此員工" });
      }

      res.status(200).json({ message: "員工資料已成功更新" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (req.method === "DELETE") {
    const data = req.query;
    const { employeesId } = data;
    if (employeesId === undefined) return;
    try {
      await db.collection("employees").deleteOne({ numberId: employeesId[0] });

      res.status(200).json({ message: "員工資料已成功刪除" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  client.close();
}

export default handler;
