import cart from "./cart"

class search{

searchproductname(searchproduct)
        {
        cy.get('#small-searchterms').type(searchproduct)
        cy.get('form > .button-1').click()
        cy.get('#Q').should('have.value', searchproduct)
        }





basicsearch()
{
    cy.get('form > .buttons > .button-1').click()
    
    // Verify search results are displayed
    cy.get('.search-results').should('be.visible');
    cy.get('.product-item').should('have.length.greaterThan', 0);
    
    // Verify search term appears in results
    cy.get('.product-title').should('contain.text', 'Comp');
    
    cy.log('✓ Basic search functionality working');
}
}

export default search;