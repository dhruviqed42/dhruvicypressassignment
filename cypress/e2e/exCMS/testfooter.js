import footer from "../../support/pageObject/footer"
import imageslider from "../../support/pageObject/imageSlider"
import homepage from "../../support/pageObject/login"
import navigationMenu from "../../support/pageObject/navigationMenu"
import product from "../../support/pageObject/product"
import search from "../../support/pageObject/search"

describe('Footer Checks', function () {

    beforeEach("Fixture Data", function () {

        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new homepage()
            cy.visit(Cypress.env('url'))
            cy.get('.ico-login').click()
            this.homepage.login(this.data.username, this.data.password)

        })
    })

    it('should display footer section correctly', () => {
        // Verify footer container exists and is visible
        cy.get('footer, .footer')
            .should('be.visible')
            .and('exist')
    })

    it('Count all footer links', () => {
        // Get all footer links and count them
        const footerlinkcount = new footer();
        footerlinkcount.count();

    })

    it('footer internal links functionality', function () {
        const footernavigate = new footer();
        footernavigate.footernavigation();
    })

    it('footer external links functionality', function () {
    const external = new footer();
    external.externallink();
  
})
})
