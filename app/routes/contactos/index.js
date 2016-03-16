import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//return this.store.find('contacto', {'accessToken': 'ya29.pALPk-PK5PXv0JLlJzAi62gr-bRo9RzQv42_z69zCY9mabVxFI8Xkg44ySB_J-cgHx0'}).then(function(data) {
			//var response = Ember.Object.create(data);
			//console.log('response --> ' ,response.content );
			//var response = serializer.extract();
			//response.forEach(function(item) {
			//	console.log('data ---> ' + item )
			//});
		//});
		var test = Ember.ArrayProxy.create({ content: [ {contacto: "Juan", test: "pruebas", email: "test@co.com" }]});
		
		return test;
		
	},
	setupController: function(controller, model) {
		this._super(controller, model);
	}
});
