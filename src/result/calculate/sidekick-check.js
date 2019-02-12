function sidekickCheck(sidekick, scorecard) {
    if(sidekick === 'mutt') {
        scorecard.bat += 1;
    }
    if(sidekick === 'rat') {
        scorecard.crossbow += 1;
    }
    if(sidekick === 'cat') {
        scorecard.handgun += 1;
    }
    return scorecard;
}

export default sidekickCheck;