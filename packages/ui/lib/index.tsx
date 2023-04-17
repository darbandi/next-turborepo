import { ReactNode } from 'react';
import { ThemeProvider } from './theme/themeProvider';

export interface UiCoreProviderProps {
    children: ReactNode
    lang?: string
    themeMode?: string
}

export function UiCoreProvider(props: UiCoreProviderProps) {
    const { children, lang, themeMode } = props
    return (
        <ThemeProvider {...{ lang, themeMode }}>
            {children}
        </ThemeProvider>
    );
}

export default UiCoreProvider;