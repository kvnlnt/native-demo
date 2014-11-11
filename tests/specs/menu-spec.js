describe("Menu :", function() {
    it("has the following DOM elements", function() {
        expect(menu.DOM.main          === void 0).toBe(false);
        expect(menu.DOM.links         === void 0).toBe(false);
        expect(menu.DOM.page_links    === void 0).toBe(false);
        expect(menu.DOM.account_links === void 0).toBe(false);
        expect(menu.DOM.menu          === void 0).toBe(false);
        expect(menu.DOM.top           === void 0).toBe(false);
        expect(menu.DOM.toggle        === void 0).toBe(false);
    });
});