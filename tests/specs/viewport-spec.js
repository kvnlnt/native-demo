describe("viewport", function() {

    // params
    var el;

    // setup
    beforeEach(function() {
        el = $('<div></div>');
    });

    // assertions
    it("should have height, top and bottom", function() {
        expect(flowroute.viewport.height).toBeGreaterThan(0);
        expect(flowroute.viewport.top).toBe(0);
        expect(flowroute.viewport.bottom).toBe(flowroute.viewport.height);
    });

    it("should detect parts in view", function(){
        expect(flowroute.viewport.contains_part(el)).toBe(true);
    });

    it("should detect parts out of view", function(){
        var outOfBounds = flowroute.viewport.height + 100;
        expect(flowroute.viewport.contains_part(el, outOfBounds)).toBe(false);
    });


});