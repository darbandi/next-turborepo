import dynamic from 'next/dynamic';
import { ssrConfig } from 'backend/lib/ssrConfig';
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
export const getServerSideProps = ssrConfig;
export default Index;
