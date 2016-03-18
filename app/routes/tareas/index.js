import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
	model: function() {	
		console.log('fjasdlfjsdkfasñlkfjdñaskj')	
		var tareas = Ember.ArrayProxy.create({ content: [] }); 
		$.ajax({
			url: config.APP.REST_WSPREFIX + '/api/users/tareas?accessToken='+ config.APP.TOKEN,
			type: 'GET'
		}).then(function(data) {			
			var items = data.tareaList.items;
			if( data.tareaList != null ) {
				items.forEach(function(el) {
					var item = Ember.Object.extend().create();
					item.setProperties(el);
					var startDate = (el.updated != undefined ? el.updated : "2000-01-01");
					item.set('updated', moment(startDate).format('L') );

					tareas.pushObject(item);
				});
			} else {
				alert('No se pudieron obtener elementos, por favor intenta de nuevo');
			}
		});
		return tareas;		
	},
	setupController: function(controller, model) {
		this._super(controller, model);
	}
});

