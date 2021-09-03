/*const persons = require("../country/state/city/index.js")
const getPeopleInCity=(persons)=>{
return 
}*/
const peopleNames = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
