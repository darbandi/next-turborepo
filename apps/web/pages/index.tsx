import dynamic from 'next/dynamic';
import { getServerSidePropsWithTranslation } from 'backend/lib/getServerSidePropsWithTranslation';
const MainSSR = dynamic(() => import('client/containers/main/MainSSR'), {
	ssr: true
});
const MainNoSSR = dynamic(() => import('client/containers/main/MainNoSSR'), {
	ssr: false
});

export function Index() {
	return (
		<>
			<MainSSR />
			<MainNoSSR />
		</>
	);
}
export const getServerSideProps = getServerSidePropsWithTranslation;
export default Index;
