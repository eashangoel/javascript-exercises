const reverseString = function(initialString) {
   const initialArray = Array.from(initialString)
   let finalArray = '';
   for (let i=initialArray.length-1 ; i>=0 ; i--)
   {
        finalArray = finalArray.concat(initialArray[i]);
   }
   return finalArray;
};

// Do not edit below this line
module.exports = reverseString;
