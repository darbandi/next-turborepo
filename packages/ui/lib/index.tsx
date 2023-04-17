import React, { ReactElement } from 'react';
import { ThemeProvider } from './theme/themeProvider';

export interface UiCoreProviderProps {
	lang?: string;
	themeMode?: string;
}

export const UiCoreProvider: React.FC<UiCoreProviderProps> = props => {
	const { children, lang, themeMode } = props;
	return <ThemeProvider {...{ lang, themeMode }}>{children}</ThemeProvider>;
};

export default UiCoreProvider;
