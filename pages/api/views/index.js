// import prisma from "../../lib/prisma";
// import { PrismaClient } from "@prisma/client";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  try {
    // let prisma = new PrismaClient()
    const totalViews = await prisma.views.aggregate({
      _sum: {
        count: true,
      },
    });

    // console.log("TOTAL VIWES: ", totalViews);

    return res.status(200).json({ total: totalViews._sum.count.toString() });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
