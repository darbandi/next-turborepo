import { getServerSidePropsWithTranslation } from 'backend/lib/getServerSidePropsWithTranslation';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('client/containers/home'), {
	ssr: false
});

export function Index() {
	return <Home />;
}
export const getServerSideProps = getServerSidePropsWithTranslation;
export default Index;
