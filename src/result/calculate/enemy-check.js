function enemyCheck(enemy, scorecard) {
    if(enemy === 'zombie') {
        scorecard.bat += 1;
    }
    if(enemy === 'vampire') {
        scorecard.crossbow += 1;
    }
    if(enemy === 'werewolf') {
        scorecard.handgun += 1;
    }
    return scorecard;

}
export default enemyCheck;