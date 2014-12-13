describe("toggle", function() {

    // params
    var el;
    var target;
    var toggle;

    // setup
    beforeEach(function() {
        el     = '<button fr-toggle="the_target"><i class="fa fa-bars"></i></button>';
        target = '<div id="the_target">target</div>';
        toggle = new flowroute.toggle.toggle(el, target);
    });

    // assertions
    it("should toggle a show class", function() {

        // on
        toggle.$el.trigger('click');
        var test_target_showing = toggle.$target.hasClass('show');
        expect(test_target_showing).toBe(true);

        // off
        toggle.$el.trigger('click');
        var test_target_showing = toggle.$target.hasClass('show');
        expect(test_target_showing).toBe(false);

    });

    it("should toggle a rotation class", function() {

        // on
        toggle.$el.trigger('click');
        var test_icon_rotation = toggle.$el.find('i').hasClass('fa-rotate-90');
        expect(test_icon_rotation).toBe(true);

        // off
        toggle.$el.trigger('click');
        var test_icon_rotation = toggle.$el.find('i').hasClass('fa-rotate-90');
        expect(test_icon_rotation).toBe(false);

    });

});