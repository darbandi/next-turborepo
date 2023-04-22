import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

export const ssrConfig = async context => {
	const session = await getServerSession(context.req, context.res, authOptions);
	return {
		props: {
			session
		}
	};
};
