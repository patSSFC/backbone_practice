const PokemonModel = Backbone.Model.extend({
    defaults : {
        name: null,
        url: null
    }
});

var PokeCollection = Backbone.Collection.extend({
    model: PokemonModel,
    url: 'http://pokeapi.co/api/v2/pokemon',
    parse: function(data) {
        return data.results;
    }
});

var pokeList = new PokeCollection();
pokeList.fetch().then(function() {
    console.log(pokeList);
})
