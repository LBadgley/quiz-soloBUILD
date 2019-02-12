import enemyCheck from './enemy-check.js';
import arenaCheck from './arena-check.js';
import sidekickCheck from './sidekick-check.js';
import rateScorecard from './rate-scorecard.js';

function calculateResult(answers) {
    const scorecard = { bat: 0, crossbow: 0, handgun: 0 };
    enemyCheck(answers.enemy, scorecard);
    arenaCheck(answers.arena, scorecard);
    sidekickCheck(answers.sidekick, scorecard);
    const result = rateScorecard(scorecard);
    return result;
}

export default calculateResult;