import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('review-tile.hbs', 'Integration | Component | review tile.hbs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{review-tile.hbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#review-tile.hbs}}
      template block text
    {{/review-tile.hbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
