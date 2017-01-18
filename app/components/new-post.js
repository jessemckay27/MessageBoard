import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        notes: this.get('notes')
      };
      this.sendAction('savePost', params);
    }
  }
});
