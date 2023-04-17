import { ReactElement } from "react";
import { ThemeProvider } from "./theme/themeProvider";

export interface UiCoreProviderProps {
  children: ReactElement;
  lang?: string;
  themeMode?: string;
}

export function UiCoreProvider(props: UiCoreProviderProps) {
  const { children, lang, themeMode } = props;
  return <ThemeProvider {...{ lang, themeMode }}>{children}</ThemeProvider>;
}

export default UiCoreProvider;
