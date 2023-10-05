let url;
describe('home www.oysho.com', () => {
    //Preparamos el json con los datos de la página para poder consumirlo, se encuentra en fixtures
    before(() => {
        cy.fixture("urls").then((furl) => {
            url = furl;
        });
    })
    beforeEach(() => {
        // Visitamos la página www.oysho.com, consumimos el json "urls" para obtener el valor esperado de la url y aceptamos las cookies
        cy.visit(url.urloysho);
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('[data-testid="cancel-store"]').click();
    });
//Con estos dos test comprobaremos que el titulo es correcto y que la pagina es navegable haciendo un scroll hasta el footer
    it('titulo correcto',()=>{
        //introduzco log para facilitar el seguimiento en caso de error
        cy.log('Comprueba el título');
        // Verificamos que el título de la página sea correcto, consumimos el json "urls" para obtener el valor esperado del título
        cy.title().should('include', url.title);
    })
    it('Scroll final de página',()=>{
        //introduzco log para facilitar el seguimiento 
        cy.log('Se realiza scroll hasta el footer');
        //Hacemos scroll hasta el footer para comprobar que la navegación es correcta y comprobamos que es visible
        cy.get('[data-piece="Footer"]').scrollIntoView().should('be.visible')
    })
});