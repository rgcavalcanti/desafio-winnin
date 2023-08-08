import { ShowMoreButton } from './show-more-button.component'

describe('<ShowMoreButton />', () => {
  it('renders', () => {
    cy.mount(<ShowMoreButton handleShowMoreArticles={() => {}}/>)
  })

  it('trigger de handler function', () => {

    const spy = cy.spy().as('fakeHandler');

    cy.mount(<ShowMoreButton handleShowMoreArticles={spy}/>);
    cy.get('[data-cy="button"]').click()
    cy.get("@fakeHandler").should("be.called")
  })
})