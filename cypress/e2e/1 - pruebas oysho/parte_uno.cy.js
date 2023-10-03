describe('home www.oysho.com', () => {
    beforeEach(() => {
        // Visitamos la página www.oysho.com
        cy.visit('https://www.oysho.com');
    });

    it('titulo correcto',()=>{
        // Verificamos que el título de la página sea correcto
        cy.title().should('include', 'OYSHO España / Spain | Deporte y Tiempo Libre | Sitio Oficial®');
    })
});