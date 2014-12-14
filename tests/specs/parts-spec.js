describe("parts", function() {

    // params
    var html;
    var parts;

    // setup
    beforeEach(function() {
        html = '<section></section><section class="viewed"></section>';
        parts = $(html).filter('section');
    });

    // assertions
    it("should correctly count viewed parts", function() {

        var test = flowroute.parts.track_views({}, parts);
        expect(test.length).toBe(1);

    });

    it("should correctly mark parts as viewed on view", function(){

        var part = parts.not('.viewed');
        expect(part.hasClass('viewed')).toBe(false);

        var test = flowroute.parts.on_view(part);
        expect(test.hasClass('viewed')).toBe(true);

    });

});