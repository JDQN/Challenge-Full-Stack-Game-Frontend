
// variables de configuracion usadas en el ambiente de desarrollo

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  urlBase: 'http://localhost:8080/',
  firebaseConfig: {
    apiKey: "AIzaSyDji-yFjYOd66JaSoQlz9VvgwJHv-0WM3c",
    authDomain: "marvel-login-d6118.firebaseapp.com",
    projectId: "marvel-login-d6118",
    storageBucket: "marvel-login-d6118.appspot.com",
    messagingSenderId: "862109046414",
    appId: "1:862109046414:web:50d8e2f4241ca1f2e05bdf"
  },
  production: false,
  apiBase: "http://localhost:8080/api",
  socketBase: "ws://localhost:8081/retrieve/"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
