import cart from "../../support/pageObject/cart"


class product{

    verfiyCardLimit(){
       return cy.get('.item-box').should('have.length', 6)

    }

    /*selectFirstProduct()
        {
            cy.get('.inventory_item').eq(0).contains('Add to cart').click()
        }
    goToCart()
    {
        cy.get('.shopping_cart_link').click()
        return new cart
    }
    selectCardProduct(productname){
        cy.get('.inventory_item').filter(`:contains("${productname}")`)
        .then($element =>{

            cy.wrap($element).contains('Add to cart').click()
        })

    }*/

       /* searchproductname(searchproduct)
        {
        cy.get('#small-searchterms').type(searchproduct)
        cy.get('form > .button-1').click()
        cy.get('#Q').should('have.value', searchproduct)
        }*/
}
export default product;