import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export async function checkAuth(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
}
