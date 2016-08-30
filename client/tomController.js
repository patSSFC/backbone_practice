var tomatoModel = Backbone.Model.extend({
    defaults : {
        name : null,
        weight : null,
        isRed : true
    },
    validate: function(attrs, options) {
        if(!attrs.name) {
            return "a name!";
        } else if (typeof(attrs.isRed !== "boolean")) {
            return "a boolean value!";
        } else if (typeof(attrs.weight !== "number")) {
            return "a number for it's weight";
        }
    },
    initialize : function() {
        console.log("I am a " + this.escape("name") + " tomato and I " + (this.get("isRed") ? "am red!" : "am not red."));
    }
});

var tomatoCollection = Backbone.Collection.extend({
    model: tomatoModel,
    url: 'test.json'
});

var tomList = new tomatoCollection();
tomList.fetch().then(function() {
    console.log(tomList);
});
