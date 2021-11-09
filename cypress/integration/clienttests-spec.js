describe("FAQ test", () => {
  before(() => {
    cy.signIn();
  });

  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("should log in, click on FAQ and test that one of our FAQs is visible", () => {
    cy.visit("http://localhost:8000/");

    cy.contains("Welcome").should("be.visible");
    cy.contains("F.A.Q.").click();
    cy.contains("love").should("be.visible");
  });
});

describe("correctly filling stages on application however not accepting the terms of service, expecting end result to show alert to user to accept ToS", () => {
  before(() => {
    cy.signIn();
  });

  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("correctly filling stages on application however not accepting the terms of service, expecting end result to show alert to user to accept ToS", () => {
    cy.visit("http://localhost:8000/");
    cy.wait(3000);

    //selecting stage one to start application
    cy.get(".stage1").click();
    cy.contains("be 19+ years of age").should("be.visible");
    cy.wait(1000);

    //accepting terms of service section 1
    cy.contains("decline").click();
    cy.wait(1000);
    cy.contains("button", "Next").click();
    cy.contains("What is your first name").should("be.visible");

    //filling in section 2
    cy.get(".stage1question2").click().type("Cypress");
    cy.wait(1000);
    cy.get(".stage1question3").type("Test");
    cy.wait(1000);
    cy.get(".stage1question4").type("gcitestuser@outlook.com");
    cy.wait(1000);
    cy.get(".stage1question5").type("12345678910");
    cy.wait(1000);
    cy.get(".stage1question6").type("01/01/1989");
    cy.wait(1000);
    cy.get(".stage1question7").select("Other");
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains(
      "To which of the following groups do you feel you belong"
    ).should("be.visible");

    //filling in section 3
    cy.get(".stage1question8").select("Other");
    cy.wait(1000);
    cy.get(".stage1question9").type("I'm a testing library");
    cy.wait(1000);
    cy.get(".stage1question10").type("Nicosia");
    cy.wait(1000);
    cy.get(".stage1question11").type("CYP 4US");
    cy.wait(1000);
    cy.get(".stage1question12").type("100010");
    cy.wait(1000);
    cy.get(".stage1question13").select("yes");
    cy.wait(1000);
    cy.get(".stage1question14").type(
      "I have no internal organs as I am software"
    );
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Which region are you applying for").should("be.visible");

    //selection region in section 4
    cy.get(".stage1question15").select("Other");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("What best describes your current situation").should(
      "be.visible"
    );

    //filling in section 5
    cy.get(".stage1question16").select("Other");
    cy.wait(1000);
    cy.get(".stage1question17").type("Computer science");
    cy.wait(1000);
    cy.get(".stage1question18").type("£0");
    cy.wait(1000);
    cy.get(".stage1question19").type("£0");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("What is your primary language").should("be.visible");

    //filling in section 6
    cy.get(".stage1question20").type("Binary");
    cy.wait(1000);
    cy.get(".stage1question21").select("Other");
    cy.wait(1000);
    cy.get(".stage1question22").type("I'm a computer program");
    cy.wait(1000);
    cy.get(".stage1question23").type("Binary");
    cy.wait(1000);
    cy.get(".stage1question24").select("Co-habiting");
    cy.wait(1000);
    cy.get(".stage1question25").select("Yes");
    cy.wait(1000);
    cy.get(".stage1question26").type("23");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Do you practice a religion and if so, which one").should(
      "be.visible"
    );

    //filling in section 7
    cy.get(".stage1question27").select("Other");
    cy.wait(1000);
    cy.get(".stage1question28").type("Computer worship");
    cy.wait(1000);
    cy.get(".stage1question29").select("Other");
    cy.wait(1000);
    cy.get(".stage1question30").type("Installed on Mitch's computer");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Why do you want to join the School of Code").should(
      "be.visible"
    );

    //filling in section 8
    cy.get(".stage1question31").type("I am literally part of your curriculum");
    cy.wait(1000);
    cy.get(".stage1question32").select("Twitter");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Please read this Privacy Notice").should("be.visible");

    //section 9 submitting stage 1
    cy.contains("button", "Submit your application!").click({ force: true });
    cy.wait(1000);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        `please accept the eligibility criteria (question 1)`
      );
    });
    cy.wait(1000);
  });
});

describe("incorrectly filling stages on application, expecting end result to show alert to user", () => {
  before(() => {
    cy.signIn();
  });

  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("incorrectly filling stage one application, expecting end result to show alert to user", () => {
    cy.visit("http://localhost:8000/");
    cy.wait(3000);

    //selecting stage one to start application
    cy.get(".stage1").click();
    cy.contains("be 19+ years of age").should("be.visible");
    cy.wait(1000);

    //accepting terms of service section 1
    cy.contains("button", "Next").click();
    cy.contains("What is your first name").should("be.visible");

    //filling in section 2
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains(
      "To which of the following groups do you feel you belong"
    ).should("be.visible");

    //filling in section 3
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Which region are you applying for").should("be.visible");

    //selection region in section 4
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("What best describes your current situation").should(
      "be.visible"
    );

    //filling in section 5
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("What is your primary language").should("be.visible");

    //filling in section 6
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Do you practice a religion and if so, which one").should(
      "be.visible"
    );

    //filling in section 7
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Why do you want to join the School of Code").should(
      "be.visible"
    );

    //filling in section 8
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Please read this Privacy Notice").should("be.visible");

    //section 9 submitting stage 1
    cy.contains("button", "Submit your application!").click({ force: true });
    cy.wait(1000);
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        `please complete all required fields. These are marked with a red asterisk`
      );
    });
    cy.wait(1000);
  });
});

describe("correctly filling  out all stages of application test, expecting end result to complete application", () => {
  before(() => {
    cy.signIn();
  });

  after(() => {
    cy.clearLocalStorageSnapshot();
    cy.clearLocalStorage();
  });

  beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

  it("correctly filling  out all stages of application test, expecting end result to complete application", () => {
    cy.visit("http://localhost:8000/");
    cy.wait(3000);

    //selecting stage one to start application
    cy.get(".stage1").click();
    cy.contains("be 19+ years of age").should("be.visible");
    cy.wait(1000);

    //accepting terms of service section 1
    cy.contains("button", "Next").click();
    cy.contains("What is your first name").should("be.visible");

    //filling in section 2
    cy.get(".stage1question2").click().type("Cypress");
    cy.wait(1000);
    cy.get(".stage1question3").type("Test");
    cy.wait(1000);
    cy.get(".stage1question4").type("gcitestuser@outlook.com");
    cy.wait(1000);
    cy.get(".stage1question5").type("12345678910");
    cy.wait(1000);
    cy.get(".stage1question6").type("01/01/1989");
    cy.wait(1000);
    cy.get(".stage1question7").select("Other");
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains(
      "To which of the following groups do you feel you belong"
    ).should("be.visible");

    //filling in section 3
    cy.get(".stage1question8").select("Other");
    cy.wait(1000);
    cy.get(".stage1question9").type("I'm a testing library");
    cy.wait(1000);
    cy.get(".stage1question10").type("Nicosia");
    cy.wait(1000);
    cy.get(".stage1question11").type("CYP 4US");
    cy.wait(1000);
    cy.get(".stage1question12").type("100010");
    cy.wait(1000);
    cy.get(".stage1question13").select("yes");
    cy.wait(1000);
    cy.get(".stage1question14").type(
      "I have no internal organs as I am software"
    );
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Which region are you applying for").should("be.visible");

    //selection region in section 4
    cy.get(".stage1question15").select("Other");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("What best describes your current situation").should(
      "be.visible"
    );

    //filling in section 5
    cy.get(".stage1question16").select("Other");
    cy.wait(1000);
    cy.get(".stage1question17").type("Computer science");
    cy.wait(1000);
    cy.get(".stage1question18").type("£0");
    cy.wait(1000);
    cy.get(".stage1question19").type("£0");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("What is your primary language").should("be.visible");

    //filling in section 6
    cy.get(".stage1question20").type("Binary");
    cy.wait(1000);
    cy.get(".stage1question21").select("Other");
    cy.wait(1000);
    cy.get(".stage1question22").type("I'm a computer program");
    cy.wait(1000);
    cy.get(".stage1question23").type("Binary");
    cy.wait(1000);
    cy.get(".stage1question24").select("Co-habiting");
    cy.wait(1000);
    cy.get(".stage1question25").select("Yes");
    cy.wait(1000);
    cy.get(".stage1question26").type("23");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Do you practice a religion and if so, which one").should(
      "be.visible"
    );

    //filling in section 7
    cy.get(".stage1question27").select("Other");
    cy.wait(1000);
    cy.get(".stage1question28").type("Computer worship");
    cy.wait(1000);
    cy.get(".stage1question29").select("Other");
    cy.wait(1000);
    cy.get(".stage1question30").type("Installed on Mitch's computer");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Why do you want to join the School of Code").should(
      "be.visible"
    );

    //filling in section 8
    cy.get(".stage1question31").type("I am literally part of your curriculum");
    cy.wait(1000);
    cy.get(".stage1question32").select("Twitter");
    cy.wait(1000);
    cy.contains("button", "Next").click({ force: true });
    cy.wait(1000);
    cy.contains("Please read this Privacy Notice").should("be.visible");

    //section 9 submitting stage 1
    cy.contains("button", "Submit your application!").click({ force: true });
    cy.wait(1000);
    cy.contains("Character Creation").should("be.visible");

    //stage 2 pixel username input
    cy.get(".stage2question1").type("Cypress");
    cy.wait(1000);
    cy.contains("button", "Submit").click({ force: true });
    cy.wait(1000);
    cy.contains("Record a Video Intro").should("be.visible");

    //stage 3 link to youtube video
    cy.get(".stage3question1").type(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );
    cy.wait(1000);
    cy.contains("button", "Submit").click({ force: true });
    cy.wait(1000);
    cy.contains("CS50 & Scratch").should("be.visible");

    //Stage 4 link
    cy.get(".stage4question1").type(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    );
    cy.wait(1000);
    cy.contains("button", "Submit").click({ force: true });
    cy.wait(1000);
    cy.contains("All done for now!").should("be.visible");

    //go to pre counterReset
    cy.contains("button", "Go to pre-course").click({ force: true });
    cy.wait(1000);

    //deleteing user after test
    cy.get(".faq").click();
    cy.wait(3000);
    cy.contains("delete").should("be.visible");
    cy.wait(1000);
    cy.contains("delete").click();
    cy.wait(1000);
    cy.contains("button", "Delete").click();
    cy.wait(1000);
    cy.contains("button", "Delete Application").click();
    cy.wait(1000);
  });
});
