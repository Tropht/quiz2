'use strict';

function bindName(firstName, lastName, func) {
  var name = firstName + ' ' + lastName;

  return func.bind(null, name);
}

module.exports = bindName;
