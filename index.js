'use strict'

class UkPostcode {

  constructor(postcode) {
    var re = new RegExp('^(([A-Z][A-Z]{0,1})([0-9][A-Z0-9]{0,1})) {0,}(([0-9])([A-Z]{2}))$');
    var parsed = re.exec(postcode.trim().toUpperCase());
    this.parsed = parsed;
  }

  outcode = function () {
    return this.parsed[1];
  }
  area = function () {
    return this.parsed[2];
  }

  district = function () {
    return this.parsed[3];
  }

  incode = function () {
    return this.parsed[4];
  }

  sector = function () {
    return this.parsed[5];
  }

  unit = function () {
    return this.parsed[6];
  }
}
module.exports = {
  UkPostcode
}
