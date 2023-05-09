describe("Projects page", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000/");
		cy.get("li a.text-slate-100.duration-300").eq(1).click();
	});

	it("should have projects title", () => {
		cy.get("h1").should("contain", "Projects");
	});

	it("should have a list of 4 projects", () => {
		cy.get("article").should("have.length", 4);
	});
});