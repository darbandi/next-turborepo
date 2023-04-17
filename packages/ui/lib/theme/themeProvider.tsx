import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Theme } from '@mui/material';
import { ThemeProvider as Provider } from '@mui/material/styles';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { darkTheme, lightTheme } from './theme';
import React from 'react';

const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin]
});

const cacheLtr = createCache({
	key: 'muiltr',
	stylisPlugins: [prefixer]
});

type ThemeProviderProps = {
	lang?: string;
	themeMode?: string;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
	const { children, lang = 'fa', themeMode = 'dark' } = props;
	const direction = lang === 'fa' ? 'rtl' : 'ltr';
	const theme: Theme = {
		...(themeMode === 'light' ? lightTheme : darkTheme),
		direction
	};
	return (
		<CacheProvider value={lang === 'fa' ? cacheRtl : cacheLtr}>
			<Provider theme={theme as Theme}>
				<>{children}</>
			</Provider>
		</CacheProvider>
	);
};
