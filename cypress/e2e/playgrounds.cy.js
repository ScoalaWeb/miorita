describe("Playgrounds page tests", () => {
    it("displays the first card correctly and redirects to the playground", () => {
        cy.visit("/#playground");
        const className = "article[data-cypress='playground0']";
        cy.get(className).as("p0").should("be.visible");
        cy.get("@p0").children("h2").should("contain", "Empty playground");
        cy.get("@p0").children("p").should("contain", "Empty code and a 9x9 board where you can move however you want. Miorița starts at the very center of the sheepfold.");
        cy.get("@p0").children("a").should("have.attr", "href", "/playgrounds/index");
    });
    it("navigates to playground", () => {
        cy.visit("/#playground");
        cy.get("article[data-cypress='playground0'] a").click();
        cy.url().should("match", /playgrounds\/index$/);
    });
    it("navigates from home", () => {
        cy.visit("/");
        cy.contains("Playgrounds").click();
        cy.url().should("match", /#playground$/);
        cy.get("article[data-cypress='playground0']").should("be.visible");
    });
    it("navigates from #about", () => {
        cy.visit("/#about");
        cy.contains("Playgrounds").click();
        cy.url().should("match", /#playground$/);
        cy.get("article[data-cypress='playground0']").should("be.visible");
    });
    it("navigates from #playgrounds", () => {
        cy.visit("/#playgrounds");
        cy.contains("Playgrounds").click();
        cy.url().should("match", /#playground$/);
        cy.get("article[data-cypress='playground0']").should("be.visible");
    });
});
