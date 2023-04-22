import { ssrConfig } from 'backend/lib/ssrConfig';
import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('client/containers/admin/dashboard'), {
	ssr: false
});

export function Index() {
	return <Dashboard />;
}
export const getServerSideProps = ssrConfig;
export default Index;

Index.auth = true;