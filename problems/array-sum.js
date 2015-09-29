'use strict';

function arraySum(arr) {
  var total = 0;

  for (var i = 0; i < arr.length; i++){
    var elem = arr[i];
    if (typeof elem === 'object'){
      arraySum(elem);
      total = total + arraySum(elem);
    }else {
      total = total + elem;
    }
  }

  return total;
  // var total = 0;
  // for(var i = 0; i < arr.length; i++){
  //   if (Object.prototype.toString.call( arr[i][i] ) === '[object Array]') { //Checks to see if it an array
  //     for(x = 0; x < arr[i].length; x++){
  //       total = arr[i][x] + total;
  //     }
  //   }else{
  //     total = arr[i] + total;
  //   }
  // }
  // return total;
}

module.exports = arraySum;
