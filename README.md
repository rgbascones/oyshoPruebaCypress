
# PRUEBA TÉCNICA IZERTIS

Prueba técnica para Izertis, automatizaciónes con cypress aplicadas a la pagina web de OYSHO.




## AUTOR
Rodrigo García Báscones - QA Tester
- [linkedin](https://www.linkedin.com/in/rodrigo-g-314822197/)
- [@rgbascones](https://github.com/rgbascones)


## 🛠 TECNOLOGÍAS USADAS

- Javascript
- Cypress
- Visual Studio Code




## INSTALACIÓN
- Deberas tener instalado Node.js 
encontrandose en el directorio en el que se clonó el proyecto ejecutar por consola.
`$ npm install`
En mi caso la version de cypress es "cypress": "13.3.0"
    
## CONTENIDO

En este proyecto de cypress hay tres partes diferenciadas



- ### Escenario 1: Validación del titulo y la navegación
Esta es la parte obligatoria de la entrevista técnica, en esta caso se prueba a conectar a la página , validar el texto del título y comprobar mediante un scroll que se puede navegar por la página.
- ### Escenario 2: Validaciones extras
Validaremos que el buscador esté visible, tambien comprobaremos que el menú lateral emergente se despliega y que todas sus opciones tienen el texto correcto.
- ### Escenario 3 : Caso de prueba funcional real:
Simularemos un caso real de navegación y de selección de producto, añadiremos el producto a la cesta e iniciaremos el proceso de compra, rellenaremos el formulario con los datos del cliente y seleccionaremos el metodo de envio, acabaremos el caso de prueba en el momento previo a acceder a la pasarela de pago.

## OBSERVACIONES

los datos tales como las url y los datos del cliente se extraen de sus respectivos JSON en fixtures inyectandolos directamente en el código.

## GIT

https://github.com/rgbascones/oyshoPruebaCypress

Existen 2 ramas en el proyecto, la rama Master y la rama bascones que es en la que se han realizado los scripts para despues fusionarla con la rama master, simulando un caso real de uso en el que se trabaja en una rama diferente para que los commits no afecten directamente a la rama master.

## GITHUB ACTIONS
Se añade el siguiente workflow en el archivo main.yml con la intención de ejecutar los test de cypress todos los dias a las 12 de la noche 

```javascript
name: workflow cypress
on:
  schedule:
  - cron: "0 0 * * 1-7"
jobs:
  ejecutar_pruebas_diarias:
    runs-on: ubuntu-latest
    steps:
      - name: Cypress run
        uses: Cypress-io/github-action@v2
        with:
          command: npm run test
          wait-on: https://www.oysho.com/
          
```
## COMANDOS POR CONSOLA



Abrir la interfaz gráfica de Cypress
```bash
  npm run cy:open
```
Ejecutar las pruebas por consola
```bash
  npm run test
```
