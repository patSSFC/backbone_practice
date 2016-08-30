var starshipModel = Backbone.Model.extend({
    defaults : {
        name: null,
        manufacturer: null,
        crew: null,
        cost_in_credits: null
    }
});

var starshipCollection = Backbone.Collection.extend({
    model: starshipModel,
    url: 'http://swapi.co/api/starships',
    parse: function(data) {
        return data.results;
    },
    falconChecker: function() {
        _.each(this.models, function(ship, key) {
            if(ship.get("name") === "Millennium Falcon") {
                ship.set("cost_in_credits", "priceless");
            }
        })
    }
});

var starships = new starshipCollection();
starships.fetch().then(function() {
    console.log(starships);
    starships.falconChecker();
    console.log(starships.findWhere({name: "Millennium Falcon"}));
})
