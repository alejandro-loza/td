import Ember from 'ember';
import config from '../../config/environment';

export default Ember.ArrayController.extend({
	actions: {
		quickAdd: function() {
			
			var accessToken = localStorage.getItem("accessToken");

			$.ajax({
				url: config.APP.REST_WSPREFIX+'/api/users/calendarios/primary/eventos',
				type: 'POST',
				data: {idCalendar: 'primary', accessToken: accessToken, evento: "TESTINGS"}
			}).then(function() {
				console.log('exito');
			});	
		} 
	}
});