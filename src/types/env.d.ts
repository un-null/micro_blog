declare namespace NodeJS {
  interface ProcessEnv {
    readonly SERVICE_DOMAIN: string;
    readonly API_KEY: string;
  }
}
