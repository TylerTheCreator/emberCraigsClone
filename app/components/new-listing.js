import Ember from 'ember';
// var cactus = true;
export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    save1() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        cat: this.get('cat'),
      };
      this.set('addNewListing', false);
      this.sendAction('save2', params);
    }
  }
});
