import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        name: this.get('name'),
        question: this.get('question'),
        notes: this.get('notes')
      };

      this.set('name', "");
      this.set('question', "");
      this.set('notes', "");

      this.sendAction('savePost', params);
    }
  }
});
