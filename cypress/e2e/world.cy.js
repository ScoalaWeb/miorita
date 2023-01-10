import t from "../../locales/en.json";

const actions = {
    turnRight: {
        next: t.texts["console-output"].message["next-turnRight"],
        action: t.texts["console-output"].message["rotate-right"],
    },
    turnLeft: {
        next: t.texts["console-output"].message["next-turnLeft"],
        action: t.texts["console-output"].message["rotate-left"],
    },
    move: {
        next: t.texts["console-output"].message["next-move"],
        action: t.texts["console-output"].message.forward,
    },
    canMove: {
        next: t.texts["console-output"].message["next-canMove"],
        true: t.texts["console-output"].message["move-possible"],
        false: t.texts["console-output"].message["move-blocked"],
    },
    found: {
        next: t.texts["console-output"].message["next-found"].split("{0}")[0],
        true: t.texts["console-output"].message.found.split("{0}")[0],
        false: t.texts["console-output"].message["not-found"].split("{0}")[0],
    },
    pick: {
        next: t.texts["console-output"].message["next-pick"].split("{0}")[0],
        action: t.texts["console-output"].message.pick.split("{0}")[0],
    },
    drop: {
        next: t.texts["console-output"].message["next-drop"].split("{0}")[0],
        action: t.texts["console-output"].message.drop.split("{0}")[0],
    },
    reset: {
        next: t.texts["console-output"].message["next-reset"],
        action: t.texts["console-output"].message.reset,
    },
    errors: {
        stop: t.texts["console-output"].message["error-stop"],
        boundary: t.texts["console-output"].message["error-map-overflow"],
        orientation: t.texts["console-output"].message["error-orientation"],
        wall: t.texts["console-output"].message["error-wall-hit"],
        generic: "undefined",
        build: t.texts["console-output"].message["error-build"].replace("{0}", ""),
    },
    end: t.texts["console-output"].message.end,
};

const actionKeys = Object.keys(actions);
const actionValues = Object.values(actions);
const monaco = "div[class='view-lines']";
const runBtn = "button[data-cypress='button__run']";
const worldConsole = "div[data-cypress='console']";

describe("The World tests", () => {
    function visitLesson (url = "/lessons/1-intro") {
        cy.visit(url);
        const width = 1980;
        const height = 1080;
        cy.viewport(width, height);
        cy.clearMonacoEditor(monaco);
    }

    it("loads with the description bar open and it disappears when clicking the \"X\" button", () => {
        cy.visit("/lessons/1-intro");
        cy.get("div[class^='panel']").should("be.visible");
        cy.get("div[class^='toggle']").click();
        cy.get("div[class^='panel']").should(($div) => {
            const { className } = $div[0];
            expect(className).to.match(/closed/);
        });
    });

    it("redirects to the next lesson when clicking the 'Next' button", () => {
        cy.visit("/lessons/1-intro");
        cy.get("a[data-cypress='next__button'").should("have.attr", "href", "/lessons/2-if");
    });

    it("redirects to Playground page when clicking on the 'More' button on the last lesson", () => {
        cy.visit("/lessons/4-function");
        cy.get("a[data-cypress='more__button']").should("have.attr", "href", "/#playground");
    });

    it("redirects to the lesson before the current one when clicking on the 'Back' button", () => {
        cy.visit("/lessons/4-function");
        cy.get("a[data-cypress='back__button']").should("have.attr", "href", "/lessons/3-while");
    });

    it("displays the current lesson title and number in the bottom left corner", () => {
        cy.visit("/lessons/4-function");
        cy.get("p[data-cypress='lesson__number']").should("contain", "4/4");
        cy.get("h3[data-cypress='lesson__title'").should("contain", "Functions");
    });

    it("moves the Sheep around the environment and displays the appropriate line number and message in the console", () => {
        visitLesson("/playgrounds/index");

        for (let i = 0; i < 3; i += 1) {
            cy.get(monaco).type(`${actionKeys[i]}()\n`);
            cy.get(runBtn).click();
            cy.get(worldConsole).should("contain", `${i + 1}`).and("contain", actionValues[i].next).and("contain", actionValues[i].action);
        }
    });

    it("correctly asserts whether the Sheep can move around the environment", () => {
        visitLesson("/playgrounds/hatchet");

        const canMove = `${actionKeys[3]}()\n`;
        const messages = Object.values(actions.canMove);
        for (let i = 0; i < 3; i += 1) {
            cy.get(monaco).type(canMove).type("turnRight()\n");
            cy.get(runBtn).click();
            cy.get(worldConsole).should("contain", messages[i]);
        }
    });

    it("picks the items, drops them and finds them and resets to initial position and displays the end message", () => {
        visitLesson("/playgrounds/hatchet");

        cy.get(monaco).type("reset()\nmove()\n");
        cy.get(runBtn);
        cy.get(worldConsole);

        let lineNumber = 3;
        for (let i = 5; i < 7; i += 1) {
            cy.get(monaco).type(`${actionKeys[i]}('hatchet')\n`);
            cy.get(runBtn).click();
            cy.get(worldConsole).should("contain", actions[actionKeys[i]].next).and("contain", actions[actionKeys[i]].action).and("contain", lineNumber);
            lineNumber += 1;
        }

        cy.clearMonacoEditor(monaco);
        cy.get(monaco).type("found('hatchet')\nreset()");
        cy.get(runBtn).click();
        cy.get(worldConsole).should("contain", actions.found.next).and("contain", actions.found.true);

        cy.clearMonacoEditor(monaco);
        cy.get(monaco).type("found('hatchet')");
        cy.get(runBtn).click();
        cy.get(worldConsole).should("contain", actions.found.false).and("contain", actions.end);
    });

    it("enters debug mode and the buttons work", () => {
        visitLesson("/playgrounds/index");

        for (let i = 0; i < 2; i += 1) {
            cy.get(monaco).type("move()\n");
        }
        cy.get("button[data-cypress='button__debug']").click();
        cy.get("button[data-cypress='button__stepover']").click();
        cy.get(worldConsole)
            .should("contain", "1")
            .and("contain", actions.move.next)
            .and("contain", actions.move.action);
        cy.get("button[data-cypress='button__stop']").click();
        cy.get(worldConsole).should("contain", actions.errors.stop);
    });

    it("errors at wall", () => {
        Cypress.on("uncaught:exception", () => false);

        visitLesson("/lessons/1-intro");
        cy.get(monaco).type("move()");
        cy.get(runBtn).click();
        cy.get(worldConsole).should("contain", actions.errors.wall);
    });

    it("stops at edge", () => {
        Cypress.on("uncaught:exception", () => false);

        visitLesson("/lessons/1-intro");
        cy.get(monaco).type("turnLeft()\nmove()");
        cy.get(runBtn).click();
        cy.get(worldConsole).should("contain", actions.errors.boundary);
    });

    it("errors on bad syntax", () => {
        Cypress.on("uncaught:exception", () => false);

        visitLesson();
        cy.get(monaco).type("turnLeft(");
        cy.get(runBtn).click();
        cy.get(worldConsole).should("contain", actions.errors.build);
    });

    it("errors on unknown token", () => {
        Cypress.on("uncaught:exception", () => false);

        visitLesson();
        cy.get(monaco).type("rotate()");
        cy.get(runBtn).click();
        cy.get(worldConsole).should("contain", "rotate is not defined");
    });

    it("shows when The Sheep stopped", () => {
        Cypress.on("uncaught:exception", () => false);

        visitLesson();
        cy.get(monaco).type("turnRight()\nturnRight()\nturnRight()\n");
        cy.get(runBtn).click();
        cy.get("button[data-cypress='button__stop']").click();
        cy.get(worldConsole).should("contain", actions.errors.stop);
    });
});
