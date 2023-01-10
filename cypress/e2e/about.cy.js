describe("About page tests", () => {
    it("dispays the sheep SVG and the h1 tag properly", () => {
        cy.visit("/", { timeout: 120000 });
        cy.get("#About > svg").should("be.visible");
        cy.get("#About > h1").should("have.text", "Miorița is here to help you in your programming journey");
    });
    it("redirects to the Lessons page when clicking on the \"Play\" button", () => {
        cy.visit("/");
        cy.get("#About > a").should("have.attr", "href", "#lessons");
    });
    it("redirects to the appropriate page in the menu", () => {
        cy.visit("/");
        const menuButtons = ["#about", "#lessons", "#playground"];
        for (let i = 0; i < menuButtons.length; i += 1) {
            cy.get(`span[class^='menuButtons'] > a:nth-child(${i + 1})`).should("have.attr", "href", `${menuButtons[i]}`);
        }
    });
    it("changes the language", () => {
        cy.visit("/");
        cy.get("button[class^='selectedLanguage']").click();
        cy.get("a[class^='otherLanguage']").click();
        cy.get("#About > h1").should("have.text", "Miorița te ajută să înveți programare");
    });
    it("changes the theme to dark-mode", () => {
        cy.visit("/");
        cy.get("i[class^='micon colorScheme']").click();
        cy.get(".layout").should("have.css", "background-image", "linear-gradient(90deg, rgb(47, 47, 47) 2px, rgba(0, 0, 0, 0) 0px), linear-gradient(rgb(47, 47, 47) 2px, rgba(0, 0, 0, 0) 0px)");
    });
    it("navigates from #lessons", () => {
        cy.visit("/#lessons");
        cy.contains("About").click();
        cy.get("#About > h1").should("have.text", "Miorița is here to help you in your programming journey");
        cy.url().should("match", /#about$/);
    });
    it("navigates from #playgrounds", () => {
        cy.visit("/#playgrounds");
        cy.contains("About").click();
        cy.get("#About > h1").should("have.text", "Miorița is here to help you in your programming journey");
        cy.url().should("match", /#about$/);
    });
    it("navigates from a sheepfold", () => {
        cy.visit("/lessons/1-intro");
        cy.get("h1 a:first-child").click();
        cy.get("#About > h1").should("have.text", "Miorița is here to help you in your programming journey");
    });
});
