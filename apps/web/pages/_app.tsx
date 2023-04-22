import { CustomAppType } from 'client/types';
import { SessionProvider, useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import en from 'public/locales/en.json';
import fa from 'public/locales/fa.json';
import { ReactElement } from 'react';
import { IntlProvider, createIntl, createIntlCache } from 'react-intl';
import { useAppStore } from 'store';
import { UiCoreProvider } from 'ui';
import './styles.css';

const Navbar = dynamic(() => import('client/components/navbar'), {
	ssr: true
});

const cache = createIntlCache();

const messages = {
	fa,
	en
};

function CustomApp(props: CustomAppType) {
	const {
		Component,
		pageProps: { session, ...pageProps }
	} = props;
	const { locale: nextLocale } = useRouter();
	const themeMode = useAppStore(store => store.themeMode);

	const intl = createIntl(
		{
			locale: nextLocale,
			messages: messages[nextLocale]
		},
		cache
	);

	return (
		<IntlProvider {...intl} onError={() => null}>
			<SessionProvider session={session} refetchInterval={60} refetchOnWindowFocus={true}>
				<Head>
					<title>Welcome to commerce!</title>
				</Head>
				<UiCoreProvider lang={nextLocale} themeMode={themeMode}>
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
				</UiCoreProvider>
			</SessionProvider>
		</IntlProvider>
	);
}

export default CustomApp;

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
