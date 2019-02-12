const test = QUnit.test;

let scorecard = null;

QUnit.testStart(function() {
    scorecard = { bat: 0, crossbow: 0, handgun: 0 };
});


test('add one to bat if "mutt" is checked', function(assert) {
    const expected = { bat: 1, crossbow: 0, handgun: 0 };
    const result = sidekickCheck('mutt', scorecard);
    assert.deepEqual(result, expected);
});

test('add one to crossbow if "rat" is checked', function(assert) {
    const expected = { bat: 0, crossbow: 1, handgun: 0 };
    const result = sidekickCheck('rat', scorecard);
    assert.deepEqual(result, expected);
});
test('add one to handgun if "cat" is checked', function(assert) {
    const expected = { bat: 0, crossbow: 0, handgun: 1 };
    const result = sidekickCheck('cat', scorecard);
    assert.deepEqual(result, expected);
});

import sidekickCheck from '../src/result/calculate/sidekick-check.js';