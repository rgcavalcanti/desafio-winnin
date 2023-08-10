describe('template spec', () => {
  it('load articles', () => {
    cy.intercept("/hot.json", { fixture: "hot.json" }).as("hot")
    cy.intercept("/hot.json?after=t3_15m74vk", { fixture: "hot-1.json" }).as("hot-1")

    cy.visit('http://localhost:8080/hot');
    cy.wait(['@hot'])
    cy.getCy("button").click()
    cy.wait(['@hot-1'])
    cy.getCy("articles-list").should("exist")
  })

  it.only('handle loading articles error', () => {
    cy.intercept("/hot.json", { statusCode: 404 }).as("hot")

    cy.visit('http://localhost:8080/hot');
    cy.wait(['@hot', "@hot"])
    cy.getCy("missing-articles-message")
    cy.intercept("/hot.json", { fixture: "hot.json" }).as("hot")
    cy.getCy("button").click()
    cy.getCy("articles-list").should("exist")
  })
})