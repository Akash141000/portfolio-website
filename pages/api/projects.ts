import { NextApiRequest, NextApiResponse } from "next";

//lib
import { getProjects } from "../../lib/portfolio-util";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const allProjects = await getProjects();
  return res.json({
    content: allProjects,
  });
}

export default handler;
