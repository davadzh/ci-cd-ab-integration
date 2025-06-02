import { MainStoreProvider } from "@app/redux/providers/main-store-provider.tsx";
import { combineProviders } from "./lib/helpers/combine-providers";
import { App } from "./components/app";
import { BrowserRouter } from "react-router-dom";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import { autoAttributesPlugin, thirdPartyTrackingPlugin } from "@growthbook/growthbook/plugins";
import { useEffect } from "react";

const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-fFXNYHBkzfeo1vc",
  enableDevMode: true,
  plugins: [
    autoAttributesPlugin(),
    thirdPartyTrackingPlugin({ trackers: ["gtm"] }),
  ],
});

export const RootComponent = () => {
  useEffect(() => {
    void growthbook.init({ streaming: true });
  }, []);

  const providers = [
    BrowserRouter,
    MainStoreProvider,
  ]

  return <GrowthBookProvider growthbook={growthbook}>
    {combineProviders(providers, <App />)}
  </GrowthBookProvider>
};
