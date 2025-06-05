import footer from "../../support/pageObject/footer"
import imageslider from "../../support/pageObject/imageSlider"
import homepage from "../../support/pageObject/login"
import navigationMenu from "../../support/pageObject/navigationMenu"
import product from "../../support/pageObject/product"
import search from "../../support/pageObject/search"



describe('Search Functionality', function () {

    beforeEach("Fixture Data", function () {

        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new homepage()
            cy.visit(Cypress.env('url'))
            cy.get('.ico-login').click()
            this.homepage.login(this.data.username, this.data.password)

        }) 

        cy.fixture('productsearch').then(function (searchdata) {
            this.searchdata = searchdata
            this.search = new search()
            this.search.searchproductname(this.searchdata.searchproduct)
            
    })
 })
    it('Basic search functionlaity', () => { 
    
    const basicsearch1 = new search();
    basicsearch1.basicsearch();

    })

})

describe('Purchase Product Functionality', function () {

    beforeEach("Fixture Data", function () {

        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new homepage()
            cy.visit(Cypress.env('url'))
            cy.get('.ico-login').click()
            this.homepage.login(this.data.username, this.data.password)
            cy.get('.slider-wrapper').should('be.visible')

        })           

 })
 it('Product Functionality', function () {
    cy.visit('https://demowebshop.tricentis.com/books')
    const product1 = new product()
    product1.verfiyCardLimit()
    
 })

})


/*it('Product Functionality', function () {
        const productname = this.data.productname
        //this.homepage.goTo("https://www.saucedemo.com/")
        cy.visit(Cypress.env('url'))
        const product = this.homepage.login(this.data.username, this.data.password)
        product.verfiyCardLimit().should('have.length', 6)
        product.selectCardProduct(productname)
        product.selectFirstProduct()
        const cart = product.goToCart()
        cart.sumofproducts().then(function (sum) {
            expect(sum).to.equal(37.98)
        })
 
    }*/
