import dynamic from 'next/dynamic';

const Home = dynamic(() => import('client/containers/home'), {
	ssr: false
});

export function Index() {
	return <Home />;
}

export default Index;
