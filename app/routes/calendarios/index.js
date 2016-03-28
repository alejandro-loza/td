import Ember from 'ember';
import config from '../../config/environment';
import moment from 'moment';


export default Ember.Route.extend({
	model: function() {		
		var calendarios = Ember.ArrayProxy.create({ content: [] });
		var accessToken = localStorage.getItem("accessToken");
		 
		$.ajax({
			url: config.APP.REST_WSPREFIX + '/api/users/eventos?accessToken2='+ accessToken,
			type: 'GET'
		}).then(function(data) {
			var items = data.eventList.items;
			moment.locale();
			if( data.eventList != null ) {
				items.forEach(function(el) {
					var item = Ember.Object.extend().create();
					item.setProperties(el);
					var startDate = (el.start != undefined ? el.start.dateTime : "2000-01-01");
					var endDate = (el.end != undefined ? el.end.dateTime : "2000-01-01");
					item.set('startFull', startDate);
					item.set('startDate', moment(startDate).format('L') );
					item.set('startTime', moment(startDate).format('h:mm a') );
					item.set('endDate', moment(endDate).format('L') );
					item.set('endTime', moment(endDate).format('h:mm a') );

					calendarios.pushObject(item);
				});
			} else {
				alert('No se pudieron obtener elementos, por favor intenta de nuevo');
			}
		});
		return calendarios;		
	},
	setupController: function(controller, model) {
		this._super(controller, model);
	}
});

