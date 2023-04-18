import dynamic from 'next/dynamic';

const Home = dynamic(() => import('client/containers/home'), {
	ssr: true
});

export function Index() {
	return <Home />;
}

export default Index;

Index.auth = true;
