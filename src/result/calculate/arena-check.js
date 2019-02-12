function arenaCheck(arena, scorecard) {
    if(arena === 'city') {
        scorecard.bat += 1;
    }
    if(arena === 'forest') {
        scorecard.crossbow += 1;
    }
    if(arena === 'prairie') {
        scorecard.handgun += 1;
    }
    return scorecard;
}

export default arenaCheck;