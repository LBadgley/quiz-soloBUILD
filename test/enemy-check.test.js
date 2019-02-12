import enemyCheck from '../src/result/calculate/enemy-check.js';

const test = QUnit.test;
QUnit.module('enemy check');
let scorecard = null;

QUnit.testStart(function() {
    scorecard = { bat: 0, crossbow: 0, handgun: 0 };
});


test('add one to bat in scorecard if "zombie" is checked', function(assert) {
    const expected = { bat: 1, crossbow: 0, handgun: 0 };
    const result = enemyCheck('zombie', scorecard);
    assert.deepEqual(result, expected);
});

test('add one to crossbow in scorecard if "vampire" is checked', function(assert) {
    const expected = { bat: 0, crossbow: 1, handgun: 0 };
    const result = enemyCheck('vampire', scorecard);
    assert.deepEqual(result, expected);
});

test('add one to handgun in scorecard if "werewolf" is checked', function(assert) {
    const expected = { bat: 0, crossbow: 0, handgun: 1 };
    const result = enemyCheck('werewolf', scorecard);
    assert.deepEqual(result, expected);
});
