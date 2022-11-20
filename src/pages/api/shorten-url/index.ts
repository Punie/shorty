import { nanoid } from 'nanoid/async';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

import { db } from '~lib/db';
import { absoluteUrl } from '~lib/utils';
import { withMethods } from '~lib/withMethod';

const schema = z.object({
  url: z.string().url(),
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = schema.safeParse(req.body);

  if (!body.success) {
    return res.status(422).json(body.error.issues);
  }

  const { url } = body.data;

  const knownUrl = await db.url.findUnique({ where: { url } });

  if (knownUrl) {
    return res
      .status(200)
      .json({ slug: knownUrl.slug, url: absoluteUrl(`/${knownUrl.slug}`) });
  }

  const newUrl = await db.url.create({
    data: { url, slug: await nanoid(7) },
  });

  return res
    .status(200)
    .json({ slug: newUrl.slug, url: absoluteUrl(`/${newUrl.slug}`) });
}

export default withMethods(['POST'], handler);
