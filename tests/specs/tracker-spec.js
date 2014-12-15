describe("elements", function() {

    // params
    var html;
    var elements;

    // setup
    beforeEach(function() {
        html = '<section></section><section fr-track="test"></section>';
        elements = $(html).filter('['+flowroute.tracker.directive+']');
    });

    // assertions
    it("should correctly track viewed elements", function() {

        var test = flowroute.tracker.track({}, elements);
        expect(test.length).toBe(1);

    });

    it("should correctly mark elements as tracked on view", function(){

        var element = elements.not('.'+flowroute.tracker.tracked);
        expect(element.hasClass(flowroute.tracker.tracked)).toBe(false);

        var test = flowroute.tracker.on_view(element);
        expect(test.hasClass(flowroute.tracker.tracked)).toBe(true);

    });

});