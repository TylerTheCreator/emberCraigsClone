import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      listings: this.store.findAll('listing'),
      cats: this.store.findAll('cat')
    });
  }
});
