describe("Posts page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:4321/");
		cy.get("li a.text-slate-100.duration-300").eq(2).click();
	});

	it("should have posts title", () => {
		cy.get("h1").should("contain", "Posts");
	});

	it("should have a list of 15 posts", () => {
		cy.get("li h3").should("have.length", 15);
	});
});
