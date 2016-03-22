/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'toodoo-desktop',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'self' http://tudu.m3x1c0.com/",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://www.googleapis.com http://tudu.m3x1c0.com:3000/ https://framework-gb.cdn.gob.mx localhost:35729 https://fonts.gstatic.com/",
      'font-src': "'self' 'unsafe-inline' 'unsafe-eval' data: http://fonts.gstatic.com/ https://fonts.gstatic.com/ ",
      'connect-src': "'self' http://tudu.m3x1c0.com:3000/ https://www.googleapis.com https://framework-gb.cdn.gob.mx ws://localhost:35729 https://fonts.gstatic.com/",
      'img-src': "'self' https://framework-gb.cdn.gob.mx",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' https://www.googleapis.com https://framework-gb.cdn.gob.mx fonts.googleapis.com ",
      'media-src': "'self'"
    },
    torii: {
      providers: {
        'google-oauth2': {
          apiKey: "850796035254-j615vfpf98738l9eog82sqsiqdmbjnbu.apps.googleusercontent.com",        
          secretKey: "me2c8LDcLMwjDOi6XAmU8nuf",
          redirectUri: "http://localhost:4200/oauth2callback"
        }
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  //configure Torii 
 /* ENV.torii = {
    sessionServiceName: 'session',
    providers: {
      'google-oauth2': {
        apiKey: "850796035254-j615vfpf98738l9eog82sqsiqdmbjnbu.apps.googleusercontent.com",        
        secretKey: "me2c8LDcLMwjDOi6XAmU8nuf",
        redirectUri: "http://localhost:4200/oauth2callback"
      }
    }
  };*/

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.LS = 'ember_simple_auth:session';
    ENV.APP.REST_WSPREFIX = "http://tudu.m3x1c0.com:3000"; 
    ENV.APP.TOKEN = "ya29.qQIWvDXD-21x1zqpdCiIw4YeUctROzfd8HJXRc5DBMm4dlQkLg01dBP2MlRNI-qchyk";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
