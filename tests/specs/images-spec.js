describe("images", function() {

    // params
    var image_1;
    var image_2;

    // setup
    beforeEach(function() {
        naked_directive  = new flowroute.images.degrade_svg('<img src="test.svg" fr-image/>');
        paramd_directive = new flowroute.images.degrade_svg('<img src="test.svg" fr-image="random.jpg"/>');
    });

    // assertions
    it("Replaces src with png version automatically", function() {
        expect(naked_directive.$el.attr('src')).toBe('test.png');
    });

    // assertions
    it("Replaces src with specified file version", function() {
        expect(paramd_directive.$el.attr('src')).toBe('random.jpg');
    });

});