const test = QUnit.test;
QUnit.module('rateScorecard');
// let scorecard = null;

// // QUnit.testStart(function() {
// //     scorecard = { bat: 0, crossbow: 0, handgun: 0 };
// // });



test('if bat is highest, then return Bat', function(assert) {
    const scorecard = { bat: 1, crossbow: 0, handgun: 0 };
    const expected = 'Bat';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);
});
test('if crossbow is highest, then return Crossbow', function(assert) {
    const scorecard = { bat: 0, crossbow: 1, handgun: 0 };
    const expected = 'Crossbow';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);
});
test('if handgun is highest, then return Handgun', function(assert) {
    const scorecard = { bat: 0, crossbow: 0, handgun: 1 };
    const expected = 'Handgun';
    const result = rateScorecard(scorecard);
    assert.equal(result, expected);
});

import rateScorecard from '../src/result/calculate/rate-scorecard.js';
