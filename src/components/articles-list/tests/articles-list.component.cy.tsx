import { ArticlesList } from "../articles-list.component";

describe("<ArticlesList />", () => {
  it("renders", () => {
    const fakeArticle: Article = {
      author: "Author",
      created_utc: new Date().getUTCDate(),
      id: "123",
      name: "foobar",
      thumbnail: "fakeimage.jpg",
      title: "Fake Title",
      permalink: "www.site.com",
    };

    cy.mount(
      <ArticlesList
        articles={[fakeArticle, fakeArticle, fakeArticle]}
        handleRefetchArticles={() => {}}
        handleShowMoreArticles={() => {}}
        isLoading={false}
      />
    );
    cy.getCy("article").should("have.length", 3);
  });

  it("show missing articles message", () => {
    cy.mount(
      <ArticlesList
        articles={[]}
        handleRefetchArticles={() => {}}
        handleShowMoreArticles={() => {}}
        isLoading={false}
      />
    );

    cy.getCy("missing-articles-message").should("exist");
  });

  it("show skeleton", () => {
    cy.mount(
      <ArticlesList
        articles={[]}
        handleRefetchArticles={() => {}}
        handleShowMoreArticles={() => {}}
        isLoading={true}
      />
    );

    cy.getCy("skeleton").should("exist");
  });

  it("show skeleton when load more articles", () => {
    cy.mount(
      <ArticlesList
        articles={[
          {
            author: "foo",
            created_utc: 123,
            id: "123",
            name: "foo",
            permalink: "site.com",
            thumbnail: "",
            title: "foobar",
          },
        ]}
        handleRefetchArticles={() => {}}
        handleShowMoreArticles={() => {}}
        isLoading={true}
      />
    );

    cy.getCy("skeleton").should("exist");
  });

  it("refetch failed articles", () => {
    const spy = cy.spy().as("fakeFunc");

    cy.mount(
      <ArticlesList
        articles={[]}
        handleRefetchArticles={spy}
        handleShowMoreArticles={() => {}}
        isLoading={false}
      />
    );

    cy.getCy("button").click();
    cy.get("@fakeFunc").should("be.called");
  });

  it("show more articles", () => {
    const spy = cy.spy().as("fakeFunc");

    cy.mount(
      <ArticlesList
        articles={[
          {
            author: "foo",
            created_utc: 123,
            id: "123",
            name: "foo",
            permalink: "site.com",
            thumbnail: "",
            title: "foobar",
          },
        ]}
        handleRefetchArticles={() => {}}
        handleShowMoreArticles={spy}
        isLoading={false}
      />
    );

    cy.getCy("button").click();
    cy.get("@fakeFunc").should("be.called");
  });
});
