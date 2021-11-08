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
    cy.contains("F.A.Q.").click()
    cy.contains("love").should("be.visible")
  });
});

describe("Result test", () => {
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
  
    it("should log in, click on Result and see a positive result for an applicant who has been accepted", () => {
      cy.visit("http://localhost:8000/");
  
     
      cy.get('.result').click()
      cy.wait()
      cy.contains("bootcamper").should("be.visible")
    });
  });

