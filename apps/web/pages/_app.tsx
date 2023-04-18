import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { UiCoreProvider } from 'ui';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import dynamic from 'next/dynamic';
import { useAppStore } from 'store';
import { appWithTranslation } from 'next-i18next';

const Navbar = dynamic(() => import('client/components/navbar'), {
	ssr: true
	// loading: () => <>Loading ...</>,
});

function CustomApp({
	Component,
	pageProps: { session, ...pageProps }
}: AppProps & { Component: { auth: boolean } }) {
	const { locale: nextLocale } = useRouter();
	const { themeMode } = useAppStore();
	return (
		<SessionProvider session={session}>
			<Head>
				<title>Welcome to commerce!</title>
			</Head>
			<UiCoreProvider lang={nextLocale} themeMode={themeMode}>
				<>
					<Navbar />
					<main className='app'>
						{Component.auth ? (
							<Auth>
								<Component {...pageProps} />
							</Auth>
						) : (
							<Component {...pageProps} />
						)}
					</main>
				</>
			</UiCoreProvider>
		</SessionProvider>
	);
}

export default appWithTranslation(CustomApp);

function Auth({ children }: { children: ReactElement }) {
	const router = useRouter();
	const { status } = useSession({
		required: true,
		onUnauthenticated() {
			router.push('/auth/login');
		}
	});

	if (status === 'loading') {
		return <div>Page Loading...</div>;
	}

	return children;
}
