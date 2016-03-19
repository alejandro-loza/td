import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticateSession() {
        this.get('session').authenticate('authenticator:torii', 'google-oauth2');
    },
    invalidateSession() {
        this.get('session').invalidate();
        //console.log('salir');
        //$('.uno').remove();        
    }
  }
});