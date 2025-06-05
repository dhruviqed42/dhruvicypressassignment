

class footer {


    count() {

        cy.get('footer a, .footer a').then(($links) => {
            const linkCount = $links.length
            cy.log(`Total footer links found: ${linkCount}`)

            // Ensure there are footer links present
            expect(linkCount).to.be.greaterThan(0)

            // Store count for later comparison
            cy.wrap(linkCount).as('totalFooterLinks')
        })

        // Verify each link is visible
        cy.get('footer a, .footer a').each(($link) => {
            cy.wrap($link).should('be.visible')
        })
    }


    footernavigation() {
        const internalLinks = [
            { text: 'Sitemap', urlPattern: '/sitemap', pageTitle: 'Sitemap' },
            { text: 'About us', urlPattern: '/about-us', pageTitle: 'About us' },
            { text: 'Search', urlPattern: '/search', pageTitle: 'Search' },
            { text: 'News', urlPattern: '/news', pageTitle: 'News' },
            { text: 'My account', urlPattern: '/customer/info', pageTitle: 'Welcome' }
        ]

        internalLinks.forEach((linkData) => {
            // Return to homepage before each test
            cy.visit('https://demowebshop.tricentis.com/')
            cy.scrollTo('bottom')

            // Find and click the footer link
            cy.get('.footer').within(() => {
                cy.contains('a', linkData.text).then($link => {
                    if ($link.length > 0) {
                        cy.wrap($link).click()

                        // Verify navigation
                        cy.url().should('include', linkData.urlPattern)

                        // Verify page content
                        // cy.get('h1, .page-title, title').should('exist')

                        cy.log(`✓ ${linkData.text} link working correctly`)
                    } else {
                        cy.log(`⚠ ${linkData.text} link not found`)
                    }
                })
            })
        })

    }

    externallink() {
        const externalLinks = [
            { selector: '.facebook a', expectedHref: 'http://www.facebook.com/nopCommerce' },
            { selector: '.twitter a', expectedHref: 'https://twitter.com/nopCommerce' },
            { selector: '.youtube a', expectedHref: 'http://www.youtube.com/user/nopCommerce' },
            { selector: '.google-plus a', expectedHref: 'https://plus.google.com/+nopcommerce' }
        ];

        externalLinks.forEach(link => {
            cy.get(`.column.follow-us ${link.selector}`)
                .should('have.attr', 'href', link.expectedHref)
                .should('have.attr', 'target', '_blank');
        });
    }

}
export default footer;