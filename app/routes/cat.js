import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('cat', params.cat_id);
  },

  actions: {
    save3(params) {
      var newListing = this.store.createRecord('listing', params);
      var cat = params.cat;
      cat.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return cat.save();
      });
      this.transitionTo('cat', params.cat);
    }
  }
});
