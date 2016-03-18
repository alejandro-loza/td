import Ember from 'ember';
import config from '../config/environment';

const { service } = Ember.inject;

export default Ember.Route.extend({
	beforeModel: function() {
		if( localStorage[config.APP.LS] != null ) {
			var localItem = JSON.parse(localStorage[config.APP.LS]);  
		} 
	}
});