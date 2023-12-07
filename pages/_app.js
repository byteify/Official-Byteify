import "@/styles/bootstrap.min.css";
import "animate.css";
import "@/styles/boxicons.min.css";
import "@/styles/flaticon.css";
import "@/styles/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import "@/styles/style.css";
// Global Responsive Style
import "@/styles/responsive.css";
// Global RTL Style
import "@/styles/rtl.css";

// Multicolor if you want this color comment out
// import '@/styles/colors/brink-pink-style.css'
// import '@/styles/colors/pink-style.css'
// import '@/styles/colors/purple-style.css'

import Layout from "@/components/_App/Layout";
import { Provider } from "react-redux";
import { useStore } from "../store";
import { useEffect } from "react";
import { Router } from "next/router";

function FacebookPixel() {
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1238613090171855");
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <Layout />
        <FacebookPixel />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
