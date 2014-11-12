describe("menu", function() {
    it("el", function() {
        expect(flowroute.menu.el.main          === void 0).toBe(false);
        expect(flowroute.menu.el.links         === void 0).toBe(false);
        expect(flowroute.menu.el.page_links    === void 0).toBe(false);
        expect(flowroute.menu.el.account_links === void 0).toBe(false);
        expect(flowroute.menu.el.menu          === void 0).toBe(false);
        expect(flowroute.menu.el.top           === void 0).toBe(false);
        expect(flowroute.menu.el.toggle        === void 0).toBe(false);
    });
});