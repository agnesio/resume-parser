var _ = require('underscore');

module.exports = function() {
  return new Resume();
};

//Resume
function Resume() {
  // generic resume format
  this.parts = {};
}


//add Key
Resume.prototype.addKey = function(key, value) {
  //value
  value = value || '';
  value = value.trim();
  // reject falsy values
  if (value) {
    if (_.has(this.parts, key)) {
      value = this.parts[key] + value;
    }

    this.parts[key] = value;
  }
};

//add Object
Resume.prototype.addObject = function(key, options) {
  //self
  var self = this;

  //has
  if (!_.has(this.parts, key)) {
    this.parts[key] = {};
  }

  //forEach
  _.forEach(options, function(optionVal, optionName) {
    if (optionVal) {
      self.parts[key][optionName] = optionVal;
    }
  });
};

/**
 *
 * @returns {String}
 */
Resume.prototype.jsoned = function() {
  return JSON.stringify(this.parts);
};
