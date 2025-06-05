

class imageslider{

prevnext()
{

    cy.get('.nivo-directionNav').should('exist')
      
      // Check individual navigation buttons
      cy.get('.nivo-prevNav')
        .should('exist')
        .and('contain.text', 'Prev')
        .and('have.css', 'display')
        .and('not.eq', 'none')
      
      cy.get('.nivo-nextNav')
        .should('exist')
        .and('contain.text', 'Next')
        .and('have.css', 'display')
        .and('not.eq', 'none')
}


navigation(){

    cy.get('.nivo-controlNav').should('be.visible')
      
      // Verify control dots exist
      cy.get('.nivo-control').should('have.length.greaterThan', 0)
      
      // Check that one control is active
      cy.get('.nivo-control.active').should('have.length', 1)
}

carouselnext(){

     // Check if there are multiple slides available
 cy.get('.nivo-control').then($controls => {
        if ($controls.length > 1) {
          // Ensure navigation is available
          cy.get('.nivo-nextNav').should('exist')
          
          // Get initial active control
          cy.get('.nivo-control.active').then($activeControl => {
            const initialActiveIndex = $activeControl.attr('rel')
            
            // Hover over slider to reveal navigation or force click
            cy.get('#nivo-slider').trigger('mouseover')
            
            // Click next button (force click in case element is not fully visible)
            cy.get('.nivo-nextNav').click({ force: true })
            
            // Wait for transition
            cy.wait(1000)
            
            // Verify active control has changed
            cy.get('.nivo-control.active').should($newActive => {
              const newActiveIndex = $newActive.attr('rel')
              expect(newActiveIndex).to.not.equal(initialActiveIndex)
            })
          })
        } else {
          // If only one slide, verify next button exists but skip navigation test
          cy.get('.nivo-nextNav').should('exist')
          cy.log('Only one slide available - skipping next navigation test')
        }
      })
    
}

carouselprevious(){
// Check if there are multiple slides available
    cy.get('.nivo-control').then($controls => {
        if ($controls.length > 1) {
          // Navigate to the last slide first to ensure prev button functionality
          cy.get('.nivo-control').last().click()
          //cy.wait(1000)
          
          // Get current active control after moving to last slide
          cy.get('.nivo-control.active').then($activeControl => {
            const currentActiveIndex = $activeControl.attr('rel')
            
            // Hover over slider to reveal navigation
            cy.get('#nivo-slider').trigger('mouseover')
            
            // Click prev button (force click in case element is not fully visible)
            cy.get('.nivo-prevNav').click({ force: true })
            
            // Wait for transition
            cy.wait(6000)
            
            // Verify active control has changed
            cy.get('.nivo-control.active').should($newActive => {
              const newActiveIndex = $newActive.attr('rel')
              expect(newActiveIndex).to.not.equal(currentActiveIndex)
            })
          })
        } else {
          // If only one slide, verify prev button exists but skip navigation test
          cy.get('.nivo-prevNav').should('exist')
          cy.log('Only one slide available - skipping prev navigation test')
        }
      })
}

}
export default imageslider;