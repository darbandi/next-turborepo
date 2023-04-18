import { NextApiRequest, NextApiResponse } from 'next';
import { apiConnection, checkAuth } from 'backend/tools';
import { createProfile, getAllProfiles } from 'backend/controllers/profileController';

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
