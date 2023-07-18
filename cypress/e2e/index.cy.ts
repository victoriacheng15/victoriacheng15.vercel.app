describe("homepage", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
	});

	it("should have the title contain hi there", () => {
		cy.get("h1").should("contain", "Hi there");
	});

	it("should have skills title", () => {
		cy.get("h2").eq(0).should("contain", "Skills");
	});

	it("should have more than 10 skills on the list", () => {
		cy.get("ul > .grid").should("have.length.gt", 10);
	});

	it("should have recent post title", () => {
		cy.get("h2").eq(1).should("contain", "Recent Posts:");
	});

	it("should have more than 10 skills on the list", () => {
		cy.get("ul > .gap-x-2").should("have.length", 5);
	});
});
