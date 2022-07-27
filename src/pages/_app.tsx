import "../../styles/globals.css";

import type { AppProps } from "next/app";

import { StoreProvider } from "@/components/StoreProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider {...pageProps}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
