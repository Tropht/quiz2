'use strict';

function longestString(arr) {
  var longest;

  for(var i = 0; i < arr.length; i++){
    var elem = arr[i];
    if (typeof elem === 'string'){
      if(!longest || elem.length > longest.length){
        longest = elem;
      }
    }
  }

  return longest;
}

module.exports = longestString;
