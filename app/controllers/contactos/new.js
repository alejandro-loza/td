/*global $:false */
import Ember from 'ember';

export default Ember.ArrayController.extend({
	givenName:'',
	familyName:'',
	email:'',
	displayName:'',
	phoneNumber:'',
	phoneNumberExt:'',
	country:'',
	region:'',
	postcode:'',
	city:'',

	actions:{
		send: function(){
			var parameters = this.getProperties("givenName", "familyName", "email", "displayName", "phoneNumber", "phoneNumberExt", "country","city", "region", "postcode");
			var xml = xmlConstructor(parameters);
            var accessToken = parseInt(localStorage.getItem("accessToken"));
			var formData = new FormData();
			formData.append('accessToken', accessToken);
			formData.append('contacto', xml);

			Ember.$.ajax({
				type: "POST",
				async: true,
				crossDomain: true,
				url: "http://tudu.m3x1c0.com:3000/api/users/contactos",
				headers: {
					"cache-control": "no-cache",
					"content-type": "application/x-www-form-urlencoded"
				},
				data:  {
					"accessToken": accessToken,
					"contacto": xml
				}

			});

			function xmlConstructor(p){
				var xml = '<atom:entry xmlns:atom=\"http:\/\/www.w3.org\/2005\/Atom\"\n    xmlns:gd=\"http:\/\/schemas.google.com\/g\/2005\">\n  <atom:category scheme=\"http:\/\/schemas.google.com\/g\/2005#kind\"\n    term=\"http:\/\/schemas.google.com\/contact\/2008#contact\"\/>\n  <gd:name>\n     <gd:givenName>' + p.givenName + '<\/gd:givenName>\n     <gd:familyName>' + p.familyName + '<\/gd:familyName>\n     <gd:fullName>' + p.givenName + ' ' + p.familyName + '<\/gd:fullName>\n  <\/gd:name>\n  <atom:content type=\"text\">Notes<\/atom:content>\n  <gd:email rel=\"http:\/\/schemas.google.com\/g\/2005#work\"\n    primary=\"true\"\n    address=\"' + p.email + '\" displayName=\"' + p.displayName + '\"\/>\n    <gd:phoneNumber rel=\"http:\/\/schemas.google.com\/g\/2005#work\"\n    primary=\"true\">\n ' + p.phoneNumber + '\n  <\/gd:phoneNumber>\n  <gd:phoneNumber rel=\"http:\/\/schemas.google.com\/g\/2005#home\">\n ' + p.phoneNumberExt + '\n  <\/gd:phoneNumber>\n  <gd:im address=\"' +p.email + '\"\n    protocol=\"http:\/\/schemas.google.com\/g\/2005#GOOGLE_TALK\"\n    primary=\"true\"\n    rel=\"http:\/\/schemas.google.com\/g\/2005#home\"\/>\n  <gd:structuredPostalAddress\n      rel=\"http:\/\/schemas.google.com\/g\/2005#work\"\n      primary=\"true\">\n    <gd:city>' + p.city + '<\/gd:city>\n    <gd:street>' + p.street +'<\/gd:street>\n    <gd:region>' + p.region + '<\/gd:region>\n    <gd:postcode>' + p.p+ '<\/gd:postcode>\n    <gd:country>' + p.country + '<\/gd:country>\n    <gd:formattedAddress>\n    ' + p.street + ' ' + p.city + '\n    <\/gd:formattedAddress>\n  <\/gd:structuredPostalAddress>\n<\/atom:entry>';
				return xml
			};

		}
	}
});