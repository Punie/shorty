import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

import { db } from '~lib/db';
import { withMethods } from '~lib/withMethod';

export const schema = z.object({
  slug: z.string(),
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = schema.safeParse(req.query);

  if (!query.success) {
    return res.status(422).json(query.error.issues);
  }

  const { slug } = query.data;

  const knownUrl = await db.url.update({
    data: { clicks: { increment: 1 } },
    where: { slug },
    select: { url: true },
  });

  if (!knownUrl) {
    return res.status(404).end();
  }

  res.redirect(301, knownUrl.url);
}

export default withMethods(['GET'], handler);
