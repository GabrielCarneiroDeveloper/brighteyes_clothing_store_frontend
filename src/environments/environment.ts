// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { IEnvironment } from './environment.interface';

export const environment = {
  production: false,
  jwtSecretkey: 'kl1hj2kl34h1&HJH',
  logLevel: 'debug',
  // BACKEND_ADDRESS: 'https://brighteyes-backend.herokuapp.com',
  BACKEND_ADDRESS: 'https://brighteyes-backend.herokuapp.com',
  googleClientId:
    '321801975531-44gmjluuqpm2tptach8r98a86gqr3fg9.apps.googleusercontent.com',
} as IEnvironment;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
