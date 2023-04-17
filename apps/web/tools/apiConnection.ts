import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const apiMiddleware = {
  onError: (err, req: NextApiRequest, res: NextApiResponse) => {
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).end('Method is not found');
  },
};

export const apiConnection = nextConnect<NextApiRequest, NextApiResponse>(
  apiMiddleware,
);
