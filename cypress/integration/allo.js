///<reference types="Cypress"/>
let productX = "Xiaomi";
let productS = "Samsung";





describe("Hometasks", () => {
    
    it("HW1 Open Allo site", () =>{
        cy.visit("https://allo.ua/")
    })

    
    it("HW2 Check title text", () =>{
        cy.get('[class="mh-button"]').eq(1).click()
        cy.get('.content__title').should('include.text','Адреса магазинів АЛЛО')
    })


    it("HW3 Find product", () =>{
        cy.get('#search-form__input').type(productX)
        cy.get('[class="search-form__submit-button"]').click()
        cy.get('[class="product-card"]').should('have.length', 28)
        cy.get('[class="cat-list-radio__link-icon"]').eq(0).click()
        cy.get('[class="filter-popup__button"]').click()
        cy.get('[class="active-filter"]',{timeout: 5000}).should('include.text', 'Смартфони і мобільні телефони')
        cy.get('[class="active-filter__btn"]').eq(1).click()
    })

        
    it("HW4 Find Samsung and credit", () =>{
        cy.get('#search-form__input').type(productS)
        cy.get('[class="search-form__submit-button"]').click()
        cy.get('[class="snap-slider__item"]').should('include.text', 'Samsung')
        cy.get('[class="product-card__img"]').eq(0).click()
        cy.get('[data-tab="credit"]').click()
        cy.get('[class="custom_select_selected_element"]').eq(4).click()
        cy.get('[data-value="8"]').click()
        cy.get('[class="credit-item__monthly"]').should('include.text', '2 750 ₴')
        cy.get('[class="custom_select_selected_element"]').eq(4).click()
        cy.get('[data-value="3"]').click()
        cy.get('[class="credit-item__monthly"]').should('include.text', '7 333 ₴')
     })


    it("HW5 Nokia country compare", () =>{
        cy.get('[class="ct-button"]').click()
        cy.get('[title="Nokia"]').click()
        cy.get('[class="compare"]').eq(0).click()
        cy.get('[class="compare"]').eq(0).click()
        cy.get('[class="compare-button compare-list__buttons-compare"]').click()
        cy.get('[class="attr-table__td"]').eq(144).invoke('text').then(somevalue => {
            cy.get('[class="attr-table__td"]').eq(145).should('have.text', somevalue).then(() => {
                console.log("True")
            })
        })
        
        
        
        
          
        

        
    })
       

        
    });

