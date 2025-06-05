import product from "../../support/pageObject/product"

class homepage{

login(username,password)
    {
        cy.get('#Email').type(username)
        cy.get('#Password').type(password)
        cy.get('form > .buttons > .button-1').click()
     
        //return new product()
    }

/* goTo(url)
    {
        cy.visit('https://www.saucedemo.com/');
    }  */ 

invalidlogin(invalidusername,invalidpassword)
    {
        cy.get('#Email').type(invalidusername)
        cy.get('#Password').type(invalidpassword)
        cy.get('form > .buttons > .button-1').click()
   
        cy.get('.validation-summary-errors').should('include.text', 'Login was unsuccessful')
    }



forgetpasswordwrong(wrongforgetemail)
    {
        cy.get('#Email').type(wrongforgetemail)
        cy.get('form > .buttons > .button-1').click()

    }

forgetpasswordcorrect(correctforgetemail)
    {
        cy.get('#Email').type(correctforgetemail)
        cy.get('form > .buttons > .button-1').click()

    }

}

export default homepage;