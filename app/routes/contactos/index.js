import Ember from 'ember';

export default Ember.Route.extend({
    content: [],

	model: function() {

        var controller = this;
        var accessToken = 'ya29.qQKeP5AObnNm-xXVOKx8wjCLARp9VP7LBD7kibqLp7vL6cSzXGD1VRAY5ZQsSaznipw';
  		Ember.$.ajax({
            url:'http://tudu.m3x1c0.com:3000/api/users/contactos?accessToken=' + accessToken,
			type: 'GET',
			dataType: 'json',
			contentType: 'application/json; charset=iso-8859-1;',
		//	data: JSON.stringify(payload)
		})
		.done(function(data) {
			var entry = data.contactoList.feed.entry;
			for (var i = 0; i < entry.length; i++) {
				var element = Ember.ArrayProxy.create( {contacto: entry[i]["title"]["$t"] , test: "pruebas", email: entry[i]["gd$email"][0]["address"] });
				controller.get('content').pushObject(element);
			};
		})
		.fail(function() {
		});

		var test = Ember.ArrayProxy.create({ content: controller.get('content')});

		return test;

	},
	setupController: function(controller, model) {
		this._super(controller, model);
	}
});
