"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export enum Themes {
  light = "light",
  dark = "dark",
}

type ThemeContextProps = {
  currentTheme?: `${Themes}`;
  changeTheme: (arg1: Themes) => void;
};

const LOCAL_KEY = "gf-theme";
const COLOR_SCHEME_QUERY = "(prefers-color-scheme: light)";

const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<Themes>();
  const useSSRLayoutEffect =
    typeof window === "undefined" ? () => {} : useLayoutEffect;

  const changeTheme = useCallback(
    (theme: Themes) => {
      setCurrentTheme(theme);
      window.localStorage.setItem(LOCAL_KEY, theme);
      const bodyClasses = document.body.classList;
      bodyClasses.remove(
        Object.values(Themes)
          .filter((item) => item !== theme)
          .join(",")
      );
      bodyClasses.add(theme);
    },
    [setCurrentTheme]
  );

  useEffect(() => {
    const onSchemeChange = (e: MediaQueryListEvent) => {
      changeTheme(e.matches ? Themes.light : Themes.dark);
    };

    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);
    mediaQuery.addEventListener("change", onSchemeChange);
    mediaQuery.removeEventListener("change", onSchemeChange);
  }, [changeTheme]);

  useSSRLayoutEffect(() => {
    // const prefersLight = window.matchMedia(COLOR_SCHEME_QUERY).matches;
    const initialTheme = () => {
      const getLocalStorage =
        (window.localStorage.getItem(LOCAL_KEY) as Themes) || "";
      if (getLocalStorage) return getLocalStorage;
      // if (prefersLight) return Themes.light;
      return Themes.dark;
    };

    changeTheme(initialTheme());
  }, [changeTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Fix initial SSR render (matchmedia is client side only)
