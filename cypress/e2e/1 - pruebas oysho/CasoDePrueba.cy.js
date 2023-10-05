//Caso de prueba funcional: Compra de un leggin, proceso hasta plataforma de pago
let datos,
    url;
describe('Caso de prueba: Compra de leggings', () => {
    //Preparamos el json con los datos de la página para poder consumirlo, se encuentra en fixtures
    before(() => {
        cy.fixture("urls").then((furl) => {
            url = furl;
        });
        cy.fixture("datos_formulario_compra").then((fdato) => {
            datos = fdato;
        });
    })
    beforeEach(() => {
        // Visitamos la página www.oysho.com, consumimos el json "urls" para obtener el valor esperado de la url y aceptamos las cookies
        cy.visit(url.urloysho);
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('[data-testid="cancel-store"]').click();
    });
    //Añado logs y comentarios para poder seguir el proceso mas facilmente
    it('Compra de leggings', () => {
        //Hacemos scroll hasta encontrar la sección de los leggings
        cy.log('Buscamos la sección de leggins');
        cy.get('[href="/es/ver-por-producto/leggings/ver-todo-c1010221001.html"] > :nth-child(1) > .slice-stacked > :nth-child(2) > :nth-child(1)').scrollIntoView().should('be.visible').click();
        //navegamos y selecionamos los leggings que queremos comprar
        cy.log('Seleccionamos los leggings tobillero high rise comfortlux');
        cy.get(':nth-child(3) > [data-testid="lazy-wrapper"] > oy-grid-item.ng-star-inserted > .template-wrapper > .product-teaser > .product > .product__image-flex-wrapper > .product__image-wrapper > oy-product-media-viewer.ng-star-inserted > oy-custom-swiper.ng-star-inserted > .slide-manager > .fade-in').scrollIntoView().should('be.visible').click();
        //seleccionamos el color negro, talla s y largura Regular
        cy.log('Seleccionamos color,talla y largura');
        cy.get('[data-testid="color-selector"] > .color-selector > :nth-child(1) > [data-testid="bullets"]').click();
        cy.get(':nth-child(3) > [data-testid="buttonName"]').click();
        cy.get('[data-testid="longList"] > :nth-child(1) > [data-testid="buttonName"]').click();
        //Añadimos producto a la cesta
        cy.log('Añadimos producto a la cesta');
        cy.get('[data-testid="addToCartButton"]').click();
        //Iniciamos el proceso de compra
        cy.log('Iniciamos el proceso de compra como invitado');
        cy.get('[data-testid="shopcart-button-component"] > oy-icon > [data-testid="icon"]').click();
        cy.get('[data-testid="button-action"]').click();
        cy.get('[data-testid="no-user-button"]').click();
        //Rellenamos el formulario, inyectando los datos extraidos del json datos_formulario_compra 
        cy.get(':nth-child(1) > .form-section__fields > :nth-child(4) > oy-form-field > .error > [data-testid="input-style"]').type(datos.nombre);
        cy.get(':nth-child(5) > oy-form-field > .error > [data-testid="input-style"]').type(datos.apellidos);
        cy.get(':nth-child(6) > oy-form-field > .error > [data-testid="input-style"]').type(datos.email);
        cy.get(':nth-child(7) > oy-form-field > .error > [data-testid="input-style"]').type(datos.email);
        cy.get('oy-phone-field.ng-star-inserted > .error > [data-testid="input-style"]').type(datos.telefono);
        cy.get(':nth-child(2) > .form-section__fields > :nth-child(2) > oy-form-field').type(datos.direccion2);
        cy.get('.error.ng-star-inserted > .error > [data-testid="input-style"]').type(datos.direccion);
        cy.contains('Madrid').click();
        cy.get(':nth-child(3) > oy-form-field > .error > [data-testid="input-style"]').type(datos.cp);
        cy.get('[data-testid="button-action"]').click();
        //Seleccionamos metodo de envio 
        cy.get('[data-testid="shipping-item-2"] > [data-testid="radio"] > [data-testid="radio-input"]').click();
        cy.get('[data-testid="button-action"]').click();
        cy.get('oy-collapse.ng-tns-c12-7 > .collapse > [data-testid="collapse-header"] > .collapse__title > .collapse-header > .store-list-element__header').click();
        cy.get('.store-list-element__body > .oy-button').click();
    })
});
