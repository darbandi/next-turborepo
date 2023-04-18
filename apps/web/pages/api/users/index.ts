import { NextApiRequest, NextApiResponse } from 'next';
import { getAllUsers, createUser } from 'backend/controllers/userController';
import { apiConnection, checkAuth } from 'backend/tools';

const handler = apiConnection
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		await checkAuth(req, res);
		await getAllUsers(req, res);
	})
	.post(async (req: NextApiRequest, res: NextApiResponse) => {
		await createUser(req, res);
	});

export default handler;
