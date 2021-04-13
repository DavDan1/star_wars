describe("Display list of characters", () => {
    before(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("displays a header", () => {
      cy.get("#header").should("contain", "Character List");
    });
    it("display a list with 10 items", () => {
      cy.get("#character-list").within(() => {
        cy.get(".character-item").should("have.length", 10);
      });
    });
    it("the list items display the expected content", () => {
      cy.get("#character-list").within(() => {
        cy.get(".character-item")
          .first()
          .find(".name")
          .should("contain", "Luke Skywalker");
      });
    });
  
    // it("the list items display an image", () => {
    //   cy.get("#character-list").within(() => {
    //     cy.get(".character-item").first().find(".avatar").should("be.visible");
    //   });
    // });
  });
  