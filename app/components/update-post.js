import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        notes: this.get('notes'),
      };

      this.sendAction('update', post, params);
    }
  }
});
