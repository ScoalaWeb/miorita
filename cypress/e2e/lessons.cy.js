describe("Lessons page tests", () => {
    it("displays the first card correctly and redirects to the lesson", () => {
        cy.visit("/#lessons");
        const className = "article[data-cypress='lesson0']";
        cy.get(className).as("lesson0").should("be.visible");
        cy.get("@lesson0").children("h2").should("have.text", "Meet Miorița");
        cy.get("@lesson0").children("p").should("have.text", "take a look at what Miorița can do");
        cy.get("@lesson0").children("a").should("have.attr", "href", "/lessons/1-intro");
    });
    it("changes the slide when using the Carousel arrow", () => {
        cy.visit("/#lessons");
        const screenWidth = 1920;
        const screenHeight = 1080;
        cy.viewport(screenWidth, screenHeight);
        cy.get("button[data-cypress='keen__next']").click();
        cy.get("div[class^='seat']:nth-child(1)").should("have.attr", "style").and("include", "transform: translate3d(-480px, 0px, 0px);");
    });
    it("navigates to lesson", () => {
        cy.visit("/#lessons");
        cy.get("article[data-cypress='lesson0'] a").click();
        cy.url().should("match", /lessons\/1-intro$/);
    });
    it("navigates from home", () => {
        cy.visit("/");
        cy.contains("Lessons").click();
        cy.url().should("match", /#lessons$/);
        cy.get("article[data-cypress='lesson0']").should("be.visible");
    });
    it("navigates from #about", () => {
        cy.visit("/#about");
        cy.contains("Lessons").click();
        cy.url().should("match", /#lessons$/);
        cy.get("article[data-cypress='lesson0']").should("be.visible");
    });
    it("navigates from #playgrounds", () => {
        cy.visit("/#playgrounds");
        cy.contains("Lessons").click();
        cy.url().should("match", /#lessons$/);
        cy.get("article[data-cypress='lesson0']").should("be.visible");
    });
});
