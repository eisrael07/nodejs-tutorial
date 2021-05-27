const rankDetails = require('./rank_details')

const eagleEye = rankDetails.rankName.rank1
const skyHawk = rankDetails.rankName.rank2
const watchMan = rankDetails.rankName.rank3
const E2 = rankDetails.rankCode.eagleEye
const SH = rankDetails.rankCode.skyHawkRank
const WM = rankDetails.rankCode.watchManRank

const soldierProfileE2 = (name) =>{
    console.log({'soldier': {'rank': eagleEye, 'rankCode': E2, 'name': name}})
}

const soldierProfileSH = (name) =>{
    console.log({'soldier': {'rank': skyHawk, 'rankCode': SH,'name': name}})
}

const soldierProfileWM = (name) =>{
    console.log({'soldier': {'rank': watchMan, 'rankCode': WM,'name': name}})
}

module.exports = {soldierProfileE2, soldierProfileSH, soldierProfileWM}