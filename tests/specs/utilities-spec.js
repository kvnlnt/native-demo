describe("utilities:debounce", function() {

    // params
    var value     = 0;
    var adder     = function(done){ value += 1; done(); };
    var debouncer = flowroute.util.debounce(adder, 100);

    // before
    beforeEach(function(done) {

        debouncer(done);
        debouncer(done);
        debouncer(done);

    });

    // setup
    it("should support async ", 
        function(done) {
            expect(value).toBe(1);
            done();
        }
    );

});