const repeatString = function(str, num) {
    returnString= '';
    if (num<0){
        return 'ERROR';
    }
    for (let i=0; i<num; i++){
            returnString = returnString+str;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
