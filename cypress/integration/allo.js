///<reference types="Cypress"/>

describe("Open Allo website", () => {
    it("Should be able to see text", () => {
    
        cy.visit("https://allo.ua/")
        cy.xpath('//*[@id="__layout"]/div/header/div[1]/div[1]/div[2]/a[1]')
            .click()
        cy.get('.content__title')
            .contains('Адреси магазинів')
        
       

        
    });
})