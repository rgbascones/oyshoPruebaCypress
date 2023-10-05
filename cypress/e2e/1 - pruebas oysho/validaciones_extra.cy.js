let url;
describe('validaciones extra', () => {
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
    it('Buscador visible',()=>{
        // Verificamos que el buscador esta visible
        cy.get('#buscador').should('be.visible')
    })
    it('Menú lateral se despliega y tiene los textos correctos',()=>{
        //introduzco logs para facilitar el seguimiento en caso de error
        // Verificamos que el menú se despliega
        cy.log('Desplegar menú');
        cy.get('[data-testid="categories-menu-button"] > [data-testid="icon"]').click();
        // Verificamos que los elementos del menu tienen los textos esperados
        cy.log('Comprobar texto elemntos menú desplegable');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > ul > li:nth-child(1) > oy-category-menu-item > a > span').should('have.text', ' NOVEDADES ');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > ul > li:nth-child(2) > oy-category-menu-item > a > span').should('have.text', ' BLACK LEGGINGS GUIDE ');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > ul > li:nth-child(3) > oy-category-menu-item > a > span').should('have.text', ' VIAJAR ');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > ul > li:nth-child(4) > oy-category-menu-item > a > span').should('have.text', ' BEST SELLERS ');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > ul > li:nth-child(5) > oy-category-menu-item > a > span').should('have.text', ' VER POR PRODUCTO ');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > ul > li:nth-child(6) > oy-category-menu-item > a > span').should('have.text', ' VER POR ACTIVIDAD ');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > ul > li:nth-child(7) > oy-category-menu-item > a > span').should('have.text', ' VER POR CALIDAD ');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > ul > li:nth-child(9) > oy-category-menu-item > a > span').should('have.text', ' OYSHO TRAINING ');
        cy.get('#header > div > oy-sidebar > div > div.sidebar__content-wrapper.sidebar--left.sidebar__content-wrapper--active > div > oy-header-categories-menu > div > nav > oy-category-menu-info > div > oy-collapse > div > button > div > p').should('have.text', ' Info ');

    })
});