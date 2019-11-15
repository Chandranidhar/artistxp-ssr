// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url:"https://xwplrg8tcc.execute-api.us-east-2.amazonaws.com/production/api/",
  invitation_id : "5d0c8819f09b0c4c69dff4e5",
  audiodeadline_url : "https://development.audiodeadline.com",
  
  url: 'https://api.audiodeadline.com/server3.php?q=',
  fileurl: 'https://api.audiodeadline.com/nodeserver/uploads/',
  videofileupload: 'https://api.audiodeadline.com/videofileupload.php',
  imagefileupload: 'https://api.audiodeadline.com/imagefileupload.php',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
