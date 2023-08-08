import { ArticlesList } from './articles-list.component'

describe('<ArticlesList />', () => {
  it('renders', () => {
    const fakeArticle: Article = {
      author: "Author",
      created_utc: new Date().getUTCDate(),
      id: "123",
      name: "foobar",
      thumbnail: "fakeimage.jpg",
      title: "Fake Title",
    };

    cy.mount(<ArticlesList articles={[fakeArticle, fakeArticle, fakeArticle]}/>)
    cy.get('[data-cy="article"]').should("have.length", 3)
  })

  it('show missing articles message', () => {
    cy.mount(<ArticlesList articles={[]}/>)
    cy.get('[data-cy="missing-articles"]').should("have.text", "Nenhum artigo encontrado.")
  })
})