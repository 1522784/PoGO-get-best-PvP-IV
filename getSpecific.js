var getAllIVTokens = require("./getBest").getAllIVTokens;
//printSpecificIVToken(194, 194, 181, 5, 5, 10)//Seedraking
printSpecificIVToken(165, 174, 277, 5, 11, 9)

function printSpecificIVToken(baseAtk, baseDef, baseSta, atkIV, defIV, staIV){
    let AllIVTokens = getAllIVTokens(baseAtk, baseDef, baseSta);
    let IVMatch = AllIVTokens.find(token => token.IV.atk == atkIV && token.IV.def == defIV && token.IV.sta == staIV);
    console.log(IVMatch);
}