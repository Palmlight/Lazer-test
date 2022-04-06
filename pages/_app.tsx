import "../styles/css/index.css";
import "../styles/scss/index.scss";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import debounce from "debounce";
import { saveState } from "../redux/storage";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default MyApp;
