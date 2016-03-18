import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');

  this.resource('contactos', function() {
    this.route('new');
    this.route('show', { path: '/show/:contacto_id' });
    this.route('edit', { path: '/edit/:contacto_id' });
  });

  this.resource('calendarios', function() {
    this.route('new');
    this.route('show', { path: '/show/:calendario_id' });
    this.route('edit', { path: '/edit/:calendario_id' });
  });

  this.resource('tareas', function() {
    this.route('new');
    this.route('show', { path: '/show/:tarea_id' });
    this.route('edit', { path: '/edit/:tarea_id' });
  });

  this.resource('notas', function() {
    this.route('new');
    this.route('show', { path: '/show/:nota_id' });
    this.route('edit', { path: '/edit/:nota_id' });
  });

});

export default Router;
