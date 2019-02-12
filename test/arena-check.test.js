import arenaCheck from '../src/result/calculate/arena-check.js';


const test = QUnit.test;
QUnit.module('arena check');
let scorecard = null;

QUnit.testStart(function() {
    scorecard = { bat: 0, crossbow: 0, handgun: 0 };
});

test('add one to bat if "city" is checked', function(assert) {
    const expected = { bat: 1, crossbow: 0, handgun: 0 };
    const result = arenaCheck('city', scorecard);
    assert.deepEqual(result, expected);
});

test('add one to crossbow if "forest" is checked', function(assert) {
    const expected = { bat: 0, crossbow: 1, handgun: 0 };
    const result = arenaCheck('forest', scorecard);
    assert.deepEqual(result, expected);
});
test('add one to handgun if "prairie" is checked', function(assert) {
    const expected = { bat: 0, crossbow: 0, handgun: 1 };
    const result = arenaCheck('prairie', scorecard);
    assert.deepEqual(result, expected);
});
