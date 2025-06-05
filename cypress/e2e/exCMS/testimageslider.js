
import footer from "../../support/pageObject/footer"
import imageslider from "../../support/pageObject/imageSlider"
import homepage from "../../support/pageObject/login"
import navigationMenu from "../../support/pageObject/navigationMenu"
import product from "../../support/pageObject/product"
import search from "../../support/pageObject/search"


describe('Image Verification Functionality', function () {

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

    it('Test Carousel Items on Homepage', () => { 
    
        cy.get('#nivo-slider')
        .should('be.visible')
        .and('have.class', 'nivoSlider')

    })

    it('should have navigation controls (prev/next)', () => {
      // Check for navigation controls
    const prevnextslider = new imageslider();
    prevnextslider.prevnext();
    })


    it('should have control navigation dots', () => {
      // Check for control navigation
      const navigationslider = new imageslider();
      navigationslider.navigation();
    })


    it('should navigate through carousel items using next button', () => {
     
      const carouselnext1 = new imageslider();
      carouselnext1.carouselnext();
    })



    it('should navigate through carousel items using prev button', () => {
      
      const carouselprevious1 = new imageslider();
      carouselprevious1.carouselprevious();
    })



})