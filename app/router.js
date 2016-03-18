import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');

  this.resource('contactos', function() {
    this.route('new',  { path: '/new' });
    this.route('show', { path: '/show/:contacto_id' });
    this.route('edit', { path: '/edit/:contacto_id' });
  });

  this.resource('calendars', function() {
    this.route('new');
    this.route('show', { path: '/show/:calendar_id' });
    this.route('edit', { path: '/edit/:calendar_id' });
  });

  this.resource('tasks', function() {
    this.route('new');
    this.route('show', { path: '/show/:task_id' });
    this.route('edit', { path: '/edit/:task_id' });
  });

  this.resource('notes', function() {
    this.route('new');
    this.route('show', { path: '/show/:note_id' });
    this.route('edit', { path: '/edit/:note_id' });
  });

});

export default Router;