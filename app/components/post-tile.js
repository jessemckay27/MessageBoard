import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm("Do you really want to delete this question>")) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
