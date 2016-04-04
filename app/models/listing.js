import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  cat: DS.belongsTo('cat', {async: true})

});
