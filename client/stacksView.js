var PersonModel = Backbone.Model.extend({
    defaults: {
        name: null
    }
});

var StackModel = Backbone.Model.extend({
    defaults: {
        name: null
    }
});

var PersonCollection = Backbone.Collection.extend({
    model: PersonModel,
    url: 'people.json'
});

var StackCollection = Backbone.Collection.extend({
    model: StackModel,
    url: 'stacks.json'
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template('<a href="https://randomuser.me/"> <%= name %> </a>'),
    initialize : function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var StackView = Backbone.View.extend({
    tagName: 'li',
    template: _.template("<h2><%= name %></h2>"),
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var PersonViewList = Backbone.View.extend({
    el: '.people',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.empty();
        this.collection.each(function(person) {
            var personView = new PersonView({model: person});
            console.log("making view!");
            this.$el.append(personView.render().$el);
        }, this);
    }
});

var StackViewList = Backbone.View.extend({
    el: '.stacks',
    initialize: function() {
        this.render();
    },
    render: function() {
        this.$el.empty();
        this.collection.each(function(stack) {
            var stackView = new StackView({model: stack});
            this.$el.append(stackView.render().$el);
        }, this);
    }
});

var people = new PersonCollection();
var stacks = new StackCollection();

people.fetch().then(function() {
    console.log("what?");
    console.log(people);
    var peopleView = new PersonViewList({collection: people});
});
stacks.fetch().then(function() {
    console.log("lol stacks");
    console.log(stacks);
    var stackView = new StackViewList({collection: stacks});
})
