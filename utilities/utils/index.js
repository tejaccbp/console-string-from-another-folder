const list = require("../country/state/city/index");

const getFirstNames = (list) => {
  return list.map((eachPerson) => eachPerson.firstName);
};

module.exports = getFirstNames;
