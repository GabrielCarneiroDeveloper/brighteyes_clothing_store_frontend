export interface IEnvironment {
  production: boolean;
  jwtSecretkey: string;
  BACKEND_ADDRESS: string;
  logLevel: string;
  googleClientId: string;
}
