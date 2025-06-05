/*class cart{

    sumofproducts(){

        cy.get('#checkout').click()
        cy.submituserdetails()
        let sum = 0 
        return cy.get('.item_pricebar').should('have.length',2)
        .each ($e1=>{
            const amount = Number($e1.text().split("$")[1].trim())
            sum = sum + amount
            cy.log(sum)    
            
        }).then(function(){
            return sum
        })
        cy.get("#finish").click()
    }

}
export default cart;*/