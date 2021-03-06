var LtiApp = Ember.Model.extend({
  id:                   Ember.attr(),
  name:                 Ember.attr(),
  short_name:           Ember.attr(),
  short_description:    Ember.attr(),
  description:          Ember.attr(),
  testing_instructions: Ember.attr(),
  author_name:          Ember.attr(),
  app_type:             Ember.attr(),
  ims_cert_url:         Ember.attr(),
  banner_image_url:     Ember.attr(),
  logo_image_url:       Ember.attr(),
  icon_image_url:       Ember.attr(),
  created_at:           Ember.attr(),
  updated_at:           Ember.attr(),
  cartridge:            Ember.attr(),
  tags:                 Ember.attr()
});

LtiApp.adapter = Ember.RESTAdapter.create();
LtiApp.url = 'api/v1/lti_apps';
LtiApp.rootKey = 'lti_app';
LtiApp.collectionKey = 'lti_apps';

module.exports = LtiApp;
