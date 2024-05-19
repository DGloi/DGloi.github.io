import type { NextApiRequest, NextApiResponse } from "next";
import links from "../../data/links.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const link: string = req.query.link?.toString() ?? "";

  const result = links.find(
    (o) =>
      o.link.includes(link) ||
      ('label' in o && o.label?.includes(link))
  );

  if (result) {
    res.status(200).redirect(result.link);
  } else {
    res.status(404).end();
  }
}
