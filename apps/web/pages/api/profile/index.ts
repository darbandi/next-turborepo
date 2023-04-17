import { NextApiRequest, NextApiResponse } from 'next';
import { apiConnection, checkAuth } from '../../../tools';
import { createProfile, getAllProfiles } from '../../../controllers/profileController';

const handler = apiConnection
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		await checkAuth(req, res);
		await getAllProfiles(req, res);
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		await checkAuth(req, res);
		await createProfile(req, res);
	});

export default handler;
