import Ember from 'ember';
import Torii from 'ember-simple-auth/authenticators/torii';
import config from '../config/environment';

const { service } = Ember.inject;

export default Torii.extend({
  torii: service('torii'),
  authenticate(options) {
    return this._super(options).then(function (data) {
      
      //alert(`authorizationCode:\n${data.authorizationCode}\nprovider: ${data.provider}\nredirectUri: ${data.redirectUri}`);

      //console.log('clientid:'+ config.torii.providers['google-oauth2'].apiKey);

      Ember.$.ajax({
			url: 'https://www.googleapis.com/oauth2/v4/token',
			type: 'POST',
			host: 'www.googleapis.com',			
			contentType: 'application/x-www-form-urlencoded',
			data: 'code=' + data.authorizationCode + '&' +
				  'client_id=' + config.torii.providers['google-oauth2'].apiKey + '&' +
				  'client_secret=' + config.torii.providers['google-oauth2'].secretKey + '&' +
				  'redirect_uri=' + config.torii.providers['google-oauth2'].redirectUri + '&' +
				  'grant_type=authorization_code'
		})
		.done(function(response) {
			console.log('Respuesta: ' + JSON.stringify(response));
			console.log('accessToken: ' + response.access_token);						
		})
		.fail(function() {			
		});

    });
  }
});