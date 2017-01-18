import Ember from 'ember';

export default Ember.Component.extend({
  update(post, params) {
     this.sendAction('update', rental, params);
   },
   delete(post) {
     if (confirm('Are you sure you want to delete this post?')) {
       this.sendAction('destroyPost', post);
     }
   }
});
