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