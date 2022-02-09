import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import withRedux from "next-redux-wrapper";
import store from "../store";
import { Provider } from "react-redux";
import { Store } from "redux";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  black: "#171923",
  white: "#EDF2F7",
  brand: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    900: "#1D4044",
    800: "#234E52",
  },
};
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config, colors });
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
