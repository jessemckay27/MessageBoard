import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
       post: this.get('post')
     };

     this.set('author', "");
     this.set('content', "");

     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
    }
  }
});
