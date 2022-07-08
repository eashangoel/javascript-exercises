const ftoc = function(temp) {
  newTemp= (temp-32)/1.8;
  return Math.round(newTemp * 10) / 10;
};

const ctof = function(temp) {
    newTemp= (temp*1.8)+32;
    return Math.round(newTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
