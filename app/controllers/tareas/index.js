import Ember from 'ember';

export default Ember.ArrayController.extend({
  //sortProperties: ['startFull'],
  //sortAscending: false,
  filter: '',
  filteredContent: function() {
    var filter = this.get('filter');
    var rx = new RegExp(filter, 'gi');
    var calendarios = this.get('arrangedContent');
    //return calendarios.filter(function(calendario) {   
    /*if( calendario.get('startFull') !== undefined ) {
        return calendario.get('startFull').match(rx);
      }
    });*/
  }.property('arrangedContent', 'filter', 'arrangedContent.@each'),
  actions: {
    addEvent: function() {
      
    }
  }
});