import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['id:desc'],
  sortedListings: Ember.computed.sort('cat.listings', 'sortBy'),

});
