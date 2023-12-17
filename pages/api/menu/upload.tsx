export const config = {
  api: {
    bodyParser: false,
  },
};
import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/services/db";
