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
      'default-src': "'none' http://tudu.m3x1c0.com/",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' http://tudu.m3x1c0.com:3000/ localhost:35729",
      'font-src': "'self' 'unsafe-inline' 'unsafe-eval' data: http://fonts.gstatic.com",
      'connect-src': "'self' http://tudu.m3x1c0.com:3000/ ws://localhost:35729",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' 'unsafe-eval' fonts.googleapis.com",
      'media-src': "'self'"
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  //configure Torii 
  ENV.torii = {
    providers: {
      'google-oauth2': {
        apiKey: "850796035254-j615vfpf98738l9eog82sqsiqdmbjnbu.apps.googleusercontent.com",
        redirectUri: "http://localhost:4200/oauth2callback"
      }
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.REST_WSPREFIX = "http://tudu.m3x1c0.com:3000";
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
