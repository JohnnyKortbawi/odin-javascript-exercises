const repeatString = function(str, numOfRepetitions) {

  if(numOfRepetitions<0) {
    return "ERROR";
  }

  newStr = '';
  for (let i=0; i<numOfRepetitions; i++) {
    newStr += str;
  }
  return newStr;
};

// Do not edit below this line
module.exports = repeatString;
