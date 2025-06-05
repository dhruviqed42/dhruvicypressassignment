import footer from "../../support/pageObject/footer"
import imageslider from "../../support/pageObject/imageSlider"
import homepage from "../../support/pageObject/login"
import navigationMenu from "../../support/pageObject/navigationMenu"
import product from "../../support/pageObject/product"
import search from "../../support/pageObject/search"



describe('Header Checks', function () {

    beforeEach("Fixture Data", function () {

        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new homepage()
            cy.visit(Cypress.env('url'))
            cy.get('.ico-login').click()
            this.homepage.login(this.data.username, this.data.password)

        })
    })

    it('Navigation Menu - Top Level', function () {

        cy.get('.topic-html-content-header').should('include.text', 'Welcome to our store')
        const menu = new navigationMenu();
        menu.topmenu();
    })

    it('Should verify navigation menu items are clickable', function () {
        // Test that each navigation item is clickable
        const menuclick = new navigationMenu();
        menuclick.Menuclickable();
    })

    it('should navigate to correct pages when menu items are clicked', function () {
        // Test Books category navigation
        const navigationcheck = new navigationMenu();
        navigationcheck.Navigationclick();

    })

    it('should display subcategories when hovering over main categories', function () {
        const submenucheck = new navigationMenu();
        submenucheck.submenu();

    })


})









