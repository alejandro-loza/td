import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    accessToken: '',
    accessToken: localStorage.getItem("accessToken"),

    actions: {
        authenticateSession() {
            this.get('session').authenticate('authenticator:torii', 'google-oauth2');
        },
        invalidateSession() {
            if (this.session.isAuthenticated) {
                this.get('session').invalidate();
            } else {
               this.set('accessToken', null) 
            }
            localStorage.removeItem("accessToken");        
            localStorage.removeItem("ember_simple_auth:session");   
        //console.log('salir');
        //$('.uno').remove();        
        }
    }
});