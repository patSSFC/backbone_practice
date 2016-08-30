var myState = {
    name: "Washington",
    capital: "Olympia",
    population: 7062000,
    nickname: "The Evergreen State"
};
var businesses = [
 {
  name: "Coding Dojo",
  city:  "Bellevue"
 },
 {
  name: "Facebook",
  city: "Mountain View"
 },
 {
  name: "Microsoft",
  city: "Redmond"
 },
 {
  name: "Expedia",
  city: "Bellevue"
 }
];

var myStateKeys = [];
var myStateValues = [];
_.each(myState, function(value, key) {
    myStateKeys.push(key);
    myStateValues.push(value);
});
var myStateX = {};
_.each(myStateKeys, function(kValue, kKey) {
    _.map()
});


var businessNames = _.pluck(businesses, 'name');
console.log(businessNames);
var bellevue = _.filter(businesses, {city : 'Bellevue'});
var sorted = _.sortBy(businesses, 'city');
var dojo = _.map(businesses, function(business) { business.name = 'Coding Dojo'; return business;});
