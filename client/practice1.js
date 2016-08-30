var ironman = {
    name: "Tony Stark",
    alias: "Iron Man"
};
var avengers_array = [
    {name: "Tony Stark", alias: "Iron Man", ability: "flight"},
    {name: "Bruce Banner", alias: "The Incredible Hulk", ability: "superhuman strength"},
    {name: "Steve Rogers", alias: "Captain America", ability: "superhuman strength"},
    {name: "Clint Barton", alias: "Hawkeye", ability: "superior hand-eye coordination"},
    {name: "Thor Odinson", alias: "Thor", ability: "teleportation"},
    {name: "Natasha Romanova", alias: "Black Widow", ability: "espionage"}
];

_.each(avengers_array, function(hero, key){
    console.log(key + " " + hero);
    _.each(hero, function(value, key) {
        console.log(key + " " + value);
    });
});

var avengersAssemble = _.map(avengers_array, function(avenger) { return avenger; });
console.log(avengersAssemble);
var avengerAbilities = _.pluck(avengers_array, 'ability');
/*strangely this line of code behaved exactly the same as if
i'd used .map(...) instead. must be some other way of calling
map or else how would it know its taking in a value as a param*/
console.log(avengerAbilities);
console.log(_.where(avengers_array, {ability : 'superhuman strength'}));
console.log(_.findWhere(avengers_array, {ability : 'espionage'}));
var filteredAvengers = _.filter(avengers_array, function(avenger) { return avenger.ability == "superhuman strength"});
console.log(filteredAvengers);
