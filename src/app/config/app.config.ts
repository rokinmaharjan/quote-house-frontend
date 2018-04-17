// import {Injectable} from "@angular/core";
// import {HttpClient} from "@angular/common/http";
// import {Observable} from "rxjs/Observable";
//
// @Injectable()
// export class AppConfig {
//   private config: Object = null;
//   private environment: Object = null;
//
//   constructor(private http: HttpClient) {
//
//   }
//
//   /**
//    * Use to get the data found in the config file
//    */
//   public getConfig(key: any) {
//     return this.config[key];
//   }
//
//   /**
//    * Use to get the data found in the environment file
//    */
//   public getEnvironment(key: any) {
//     return this.environment[key];
//   }
//
//   /**
//    * This method:
//    *   a) Loads "environment.json" to get the current working environment (e.g.: 'production', 'development')
//    *   b) Loads "config.[environment].json" to get all environment's variables (e.g.: 'config.development.json')
//    */
//   public load() {
//     return new Promise((resolve, reject) => {
//       this.http.get('environment.json').subscribe((envResponse) => {
//         this.environment = envResponse;
//         let request: any = null;
//
//         switch (envResponse['environment']) {
//           case 'production': {
//             request = this.http.get('config.' + envResponse.env + '.json');
//           }
//             break;
//
//           case 'development': {
//             request = this.http.get('config.' + envResponse.env + '.json');
//           }
//             break;
//
//           case 'default': {
//             console.error('Environment file is not set or invalid');
//             resolve(true);
//           }
//             break;
//         }
//
//         if (request) {
//           request
//             .map(res => res.json())
//             .catch((error: any) => {
//               console.error('Error reading ' + envResponse['environment'] + ' configuration file');
//               resolve(error);
//               return Observable.throw(error.json().error || 'Server error');
//             })
//             .subscribe((responseData) => {
//               this.config = responseData;
//               resolve(true);
//             });
//         } else {
//           console.error('Env config file "environment.json" is not valid');
//           resolve(true);
//         }
//       });
//
//     });
//   }
//
//
// }
