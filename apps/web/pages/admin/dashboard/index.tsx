import { getServerSidePropsWithTranslation } from 'backend/lib/getServerSidePropsWithTranslation';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('client/containers/admin/dashboard'), {
	ssr: false
});

export function Index() {
	return <Dashboard />;
}
export const getServerSideProps = getServerSidePropsWithTranslation;
export default Index;

Index.auth = true;