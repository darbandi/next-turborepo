import { getServerSession } from 'next-auth';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { authOptions } from '../../pages/api/auth/[...nextauth]';

export const getServerSidePropsWithTranslation = async context => {
	const locale = context?.locale || context?.router?.locale || 'fa';
	const translations = await serverSideTranslations(locale);
	const session = await getServerSession(context.req, context.res, authOptions);
	return {
		props: {
			...translations,
			session
		}
	};
};
