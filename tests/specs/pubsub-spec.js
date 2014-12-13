describe("pubsub", function() {

    // params
    var param = null;
    var publisher;
    var getParam;

    // setup
    beforeEach(function() {

        publisher = {
            setParam: function(e, value) {
                param = value;
            },
            getParam: function(){
                return param;
            }
        };

        spyOn(publisher, 'setParam').and.callThrough();

    });

    // assertions
    it("should be a zepto object", function() {
        expect($.zepto.isZ(flowroute.pubsub.o)).toBe(true);
    });

    it("should be able to subscribe and publish and pass arguments", function() {
        flowroute.pubsub.subscribe('TEST:PUBLISH', publisher.setParam);
        flowroute.pubsub.publish('TEST:PUBLISH', ['tested']);
        expect(publisher.setParam).toHaveBeenCalled();
        expect(publisher.getParam()).toBe('tested');
    });

});