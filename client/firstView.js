var PersonModel = Backbone.Model.extend({
    defaults: {
        name: null
    }
});
var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template($("#greetingTemplate").html()),
    initialize: function() {
        this.render();
        //not usually what we do here but for purposes of learning....
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        $('body').append(this.$el);
        return this;
    }
});



var badGuy = new PersonModel({name: "Oddfellow"});
console.log(badGuy);
// var greetingTemplate = _.template("<h1> Hey there, my name is <%= name %>!</h1>");
// console.log(greetingTemplate(badGuy.toJSON()));
// // $(document).ready(function() {
// //     $('body').append(greetingTemplate(badGuy.toJSON()));
// // });
var personListView = new PersonView({model : badGuy});
