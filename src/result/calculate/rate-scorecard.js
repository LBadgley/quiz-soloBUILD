function rateScorecard(scorecard) {
    const bat = scorecard.bat;
    const crossbow = scorecard.crossbow;
    const handgun = scorecard.handgun;
    if(bat > crossbow && bat > handgun) {
        return 'Bat';
    }
    if(crossbow > bat && crossbow > handgun) {
        return 'Crossbow';
    }
    if(handgun > bat && handgun > crossbow) {
        return 'Handgun';
    }
    else {
        return 'your hands';
    }
}
export default rateScorecard;

