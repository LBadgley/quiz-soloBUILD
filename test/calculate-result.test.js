import calculateResult from '../src/result/calculate/calculate-result.js';

const test = QUnit.test;


test('if Bat has the highest score, return Bat', function(assert) {
    const answers = {
        enemy: 'zombie',
        arena: 'city',
        sidekick: 'mutt'
    };
    const expected = 'Bat';
    const result = calculateResult(answers);
    assert.equal(result, expected);
});

test('if Crossbow has the highest score, return Crossbow', function(assert) {
    const answers = {
        enemy: 'vampire',
        arena: 'forest',
        sidekick: 'rat'
    };
    const expected = 'Crossbow';
    const result = calculateResult(answers);
    assert.equal(result, expected);
});
test('if Handgun has the highest score, return Handgun', function(assert) {
    const answers = {
        enemy: 'werewolf',
        arena: 'prairie',
        sidekick: 'cat'
    };
    const expected = 'Handgun';
    const result = calculateResult(answers);
    assert.equal(result, expected);
});