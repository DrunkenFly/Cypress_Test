///<reference types="Cypress"/>
let product = "Xiaomi";

describe("Hometasks", () => {
    
    it("HW1 Open Allo site", () => {
        cy.visit("https://allo.ua/")
    })
    
    it("HW2 Check title text", () =>{
        cy.get('[class="mh-button"]').eq(1).click()
        cy.get('.content__title').should('have.text','Адреси магазинів')
    })

    it("HW3 Find product", () =>{
        cy.get('#search-form__input').type(product)
        cy.get('[class="search-form__submit-button"]').click()
        cy.get('[class="product-card"]').should('have.length', 28)
        cy.get('[class="cat-list-radio__link-icon"]').eq(0).click()
        cy.get('[class="filter-popup__button"]').click()
        cy.get('[data-id="cat"]').should('include.text', 'Смартфони і мобільні телефони')
    })
        
       

        
    });

