/// <reference types="vite/client" />

interface ImportMetaEnv {
  // General envs
  readonly VITE_APP_TITLE: string;

  // Constants
  readonly VITE_XSOLLA_METRIKA_COUNTER_ID: string;

  // Urls
  readonly VITE_OVERLAY_URL: string;
  readonly VITE_ORBS_API_URL: string;
  readonly VITE_BABKA_ACCOUNT_URL: string;
  readonly VITE_METAFRAME_SDK_URL: string;
  readonly VITE_CENTRIFUGE_CONNECTION_URL: string;
  readonly VITE_ORBS_NOTIFICATION_API_URL: string;
  readonly VITE_METRIKA_SERVER_URL: string;

  // IDs
  readonly VITE_ORBS_API_HOST_ID: string;
  readonly VITE_LOGIN_PROJECT_ID: string;
  readonly VITE_GOOGLE_GA_ID: string;
  readonly VITE_MERCHANT_ID: number;
  readonly VITE_PROJECT_ID: number;

  // Mini app's addresses
  readonly VITE_WALLET_APP_URL: string;
  readonly VITE_BACKPACK_APP_URL: string;
  readonly VITE_PROFILE_APP_URL: string;
  readonly VITE_LOGIN_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
