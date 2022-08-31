import type { AppProps } from "next/app";
import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from "vcc-ui";
import { GlobalStyles } from "../src/styles/GlobalStyles";
import { StylesReset } from "../src/styles/StyleReset";
import { CssVariables } from "../src/styles/CssVariables";

function HomePage({ Component, pageProps }: AppProps) {
    const AnyComponent = Component as any;
    return (
        <React.StrictMode>
            <StyleProvider>
                <ThemePicker variant="light">
                    <AnyComponent {...pageProps} />
                    <GlobalStyles />
                    <StylesReset />
                    <CssVariables />
                </ThemePicker>
            </StyleProvider>
        </React.StrictMode>
    );
}

export default HomePage;
