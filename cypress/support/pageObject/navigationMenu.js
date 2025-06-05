

class navigationMenu {

    topmenu() {
        cy.get('.header-menu').should('be.visible')
        const expectedMenuItems = [
            'Books',
            'Computers',
            'Electronics',
            'Apparel & Shoes',
            'Digital downloads',
            'Jewelry',
            'Gift Cards'
        ]

        expectedMenuItems.forEach((menuItem) => {
            cy.get('.header-menu')
                .contains(menuItem)
                .should('be.visible')
                .and('contain.text', menuItem)
        })


    }

    Menuclickable() {

        cy.get('.header-menu a').each(($link) => {
            cy.wrap($link)
                .should('have.attr', 'href')
                .and('not.be.empty')

        })

    }

    Navigationclick() {
        cy.get('.header-menu')
            .contains('Books')
            .click()
        cy.url().should('include', '/books')
        cy.get('h1').should('contain.text', 'Books')

        // Go back to homepage
        cy.visit('https://demowebshop.tricentis.com/')

        // Test Computers category navigation
        cy.get('.header-menu')
            .contains('Computers')
            .click()
        cy.url().should('include', '/computers')
        cy.get('h1').should('contain.text', 'Computers')
    }

    submenu() {
        cy.get('a[href="/computers"]').parent().find('ul.sublist.firstLevel a').each(($el) => {
            cy.wrap($el)
                .invoke('attr', 'href')
                .then((href) => {
                    cy.visit(`https://demowebshop.tricentis.com${href}`);
                    cy.url().should('include', href);
                });
        });

        cy.get('a[href="/electronics"]').parent().find('ul.sublist.firstLevel a').each(($el) => {
            cy.wrap($el)
                .invoke('attr', 'href')
                .then((href) => {
                    cy.visit(`https://demowebshop.tricentis.com${href}`);
                    cy.url().should('include', href);
                });
        });
    }

    

}


export default navigationMenu;