import { ssrConfig } from 'backend/lib/ssrConfig';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('client/containers/home'), {
	ssr: false
});

export function Index() {
	return <Home />;
}
export const getServerSideProps = ssrConfig;
export default Index;
