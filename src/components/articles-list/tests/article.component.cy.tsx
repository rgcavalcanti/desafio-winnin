import { Article } from "../article.component";

describe("<Article />", () => {
  it("renders", () => {
    const fakeArticle: Article = {
      author: "Author",
      created_utc: new Date().getUTCDate(),
      id: "123",
      name: "foobar",
      thumbnail: "fakeimage.jpg",
      title: "Fake Title",
      permalink: "abc",
    };

    cy.mount(<Article article={fakeArticle} />);
    cy.get('[data-cy="title"]').should("have.text", fakeArticle.title);
    cy.get('[data-cy="info"]')
      .should("contain.text", `enviado há`)
      .should("contain.text", `por u/${fakeArticle.author}`);
  });
});
