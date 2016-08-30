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

var cherry = new tomatoModel({name : "Cherry", weight: 2});
var heirloom = new tomatoModel({name: "Heirloom", weight: 8, isRed: false});
var roma = new tomatoModel({name: "Roma", weight: 4});
var rotten = new tomatoModel({name: "<script>alert('gotcha!')</script>", isRed:1231});
var blah = new tomatoModel();

blah.on("invalid", function(model, error) {
    console.log(model.get("name") + " is not a valid tom! It needs: " + error);
});
blah.save();
// console.log(heirloom);
// console.log(rotten);
// console.log(blah);
