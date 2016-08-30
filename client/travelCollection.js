var TravelTimeModel = Backbone.Model.extend({
    defaults:{
        // AverageTime: null,
        // currentTime: null,
        // name: null
    }
});
var TravelTimeCollection = Backbone.Collection.extend({
    model: TravelTimeModel,
    url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431"
});
var travelTimes = new TravelTimeCollection();
travelTimes.fetch().then(function() {
    console.log(travelTimes);
    console.log("The length of the travelTimes collection is " + travelTimes.length);
    console.log(travelTimes.at(29));
    console.log(travelTimes.models[0]);
    console.log(_.filter(travelTimes.models, function(x) { return x.get("CurrentTime") === 10}));
    console.log(_.filter(travelTimes.models, function(travelModel) {return travelModel.get("Name") === "Bellevue-Seattle via 520 (WB PM)"}));
});
