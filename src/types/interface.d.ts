import { Theme } from "./types";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

interface IconNavbarProps {
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  label: string;
  dir: string;
}

interface HeaderSectionProps {
  icon: React.ComponentType<{ className?: string }>;
  titleSection: string;
  title: string;
  subTitle: string;
  thirdTitle?: string;
  fourthTitle?: string;
  fivethTitle?: string;
}

interface IconProps {
  width?: string | number;
  height?: string | number;
}

export type { ThemeProviderProps, ThemeProviderState, IconNavbarProps, HeaderSectionProps, IconProps };
