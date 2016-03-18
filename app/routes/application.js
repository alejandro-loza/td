import Ember from 'ember';
import config from '../config/environment';

const { service } = Ember.inject;

export default Ember.Route.extend({
  beforeModel: function() {
    var localItem = JSON.parse(localStorage[config.APP.LS]);    
  }
});