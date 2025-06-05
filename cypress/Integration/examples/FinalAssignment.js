import footer from "../../support/pageObject/footer"
import imageslider from "../../support/pageObject/imageSlider"
import homepage from "../../support/pageObject/login"
import navigationMenu from "../../support/pageObject/navigationMenu"
import product from "../../support/pageObject/product"
import search from "../../support/pageObject/search"

describe('Login Checks', function () {

    beforeEach("Fixture Data", function () {

        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new homepage()

        })
    })

    it('invalid Login Functionality', function () {

        //this.homepage.goTo("https://www.saucedemo.com/")
        cy.visit(Cypress.env('url'))
        cy.get('.ico-login').click()
        this.homepage.invalidlogin(this.data.invalidusername, this.data.invalidpassword)
        cy.wait(2000)

    })

    it('valid Login Functionality', function () {

        //this.homepage.goTo("https://www.saucedemo.com/")
        cy.visit(Cypress.env('url'))
        cy.get('.ico-login').click()
        this.homepage.login(this.data.username, this.data.password)
        cy.get('.topic-html-content-header').should('include.text', 'Welcome to our store')


    })

    it('Forget Password Functionality - Wrong email id', function () {

        //this.homepage.goTo("https://www.saucedemo.com/")
        cy.visit(Cypress.env('url'))
        cy.get('.ico-login').click()
        cy.get('.forgot-password > a').click()
        this.homepage.forgetpasswordwrong(this.data.wrongforgetemail)
        cy.get('.result').should('include.text', 'Email not found.')


    })


    it('Forget Password Functionality - Correct email id', function () {

        //this.homepage.goTo("https://www.saucedemo.com/")
        cy.visit(Cypress.env('url'))
        cy.get('.ico-login').click()
        cy.get('.forgot-password > a').click()
        this.homepage.forgetpasswordcorrect(this.data.correctforgetemail)
        cy.get('.result').should('include.text', 'Email with instructions has been sent to you.')


    })


})

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
 
    })*/