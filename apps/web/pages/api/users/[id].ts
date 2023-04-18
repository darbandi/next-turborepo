import { NextApiRequest, NextApiResponse } from 'next';
import { apiConnection, checkAuth } from 'backend/tools';
import { deleteUser, getUserById, updateUser } from 'backend/controllers/userController';

const handler = apiConnection
	.get(async (req: NextApiRequest, res: NextApiResponse) => {
		await checkAuth(req, res);
		await getUserById(req, res);
	})
	.put(async (req: NextApiRequest, res: NextApiResponse) => {
		await checkAuth(req, res);
		await updateUser(req, res);
	})
	.delete(async (req: NextApiRequest, res: NextApiResponse) => {
		await checkAuth(req, res);
		await deleteUser(req, res);
	});

export default handler;
