var PersonModel = Backbone.Model.extend({
    defaults:{name: null}
});
var PeopleList = Backbone.Collection.extend({
    model: PersonModel
});
var person1 = new PersonModel({name: "Speros"});
var person2 = new PersonModel({name: "Mike"});
var person3 = new PersonModel({name: "Martin"});
var person4 = new PersonModel({name: "Charlie"});
var person5 = new PersonModel({name: "Dylan"});
var person6 = new PersonModel({name: "Kris"});
var myPeople = new PeopleList([person1, person2, person3, person4, person5, person6]);
var myPersonTemplate = "<h1><%= name %></h1>";
var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(myPersonTemplate),
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});
var PeopleListView = Backbone.View.extend({
    el: '.faculty',
    initialize: function(){
        this.render();
    },
    render: function(){
        //...use _.each() in this render method! Don't forget the context parameter!
        this.collection.each(function(person) {
            var personView = new PersonView({model: person});
            this.$el.append(personView.render().$el);
        }, this);
    }
});
var myPeopleList = new PeopleListView({collection: myPeople});
