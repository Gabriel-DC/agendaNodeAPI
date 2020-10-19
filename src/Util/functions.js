class Util {
  isNullOrEmpty(value) {
    return value === null || value === undefined || value === "";
  }
}

module.exports = new Util();
