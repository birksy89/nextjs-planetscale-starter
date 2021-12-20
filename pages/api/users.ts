import prisma from "@db";
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import nc from "next-connect";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const users = await prisma.user.findMany();

    return res.status(200).json(users);
  } catch (error) {
    console.error("[api] user", error);
    return res.status(500).json({ statusCode: 500, message: error.message });
  }
};

export default nc().get(handler);
