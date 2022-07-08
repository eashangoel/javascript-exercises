const removeFromArray = function(givenArray, ...args) {
    for (let i=0; i<args.length; i++){
        if (givenArray.includes(args[i]))
        {givenArray.splice(givenArray.indexOf(args[i]), 1);}
        else continue;
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
