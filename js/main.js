/// 1:14

/*---------------------------*/
/*   variables globales      */
/*---------------------------*/

//listado de productos
const listadoDeProductos = [
    {nombre: 'carne', cantidad: 2, precio: 20.50},
    {nombre: 'lechuga', cantidad: 1, precio: 3.99},
    {nombre: 'tomate', cantidad: 5, precio: 2.50},
    {nombre: 'pan blanco', cantidad: 1, precio: 1.50},
    {nombre: 'manzanas rojas', cantidad: 3, precio: 4.20},
    {nombre: 'yogurt natural', cantidad: 2, precio: 1.80},
    {nombre: 'arroz blanco', cantidad: 1, precio: 2.99},
    {nombre: 'frijoles negros', cantidad: 1, precio: 1.75},
    {nombre: 'queso cheddar', cantidad: 200, unidad: 'gr', precio: 3.50},
    {nombre: 'huevos grandes', cantidad: 12, precio: 4.99},
    {nombre: 'cerveza', cantidad: 6, precio: 9.99},
    {nombre: 'agua mineral', cantidad: 12, precio: 5.50},
    {nombre: 'galletas de chocolate', cantidad: 1, precio: 2.25},
    {nombre: 'pasta spaghetti', cantidad: 500, unidad: 'gr', precio: 1.99},
    {nombre: 'café molido', cantidad: 250, unidad: 'gr', precio: 4.50}
];

/*---------------------------*/
/*  listado de productos     */
/*---------------------------*/


/*---------------------------*/
/*   funciones globales      */
/*---------------------------*/
function renderLista() {
    const ul = document.createElement('ul')
    ul.classList.add('demo-list-icon', 'md.list')

    listadoDeProductos.forEach((producto, index) => {
        ul.innerHTML += `
            <li class="mdl-list__item">
                    <span class="mdl-list__item-primary-content w-10">
                        <i class="material-icons mdl-list__item-icon ">shopping_cart</i>
                    </span>


                    <span class="mdl-list__item-primary-content w-50"> ${producto.nombre}</span>
                    
                    <span class="mdl-list__item-primary-content w-30" >
                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input value=${producto.cantidad} class="mdl-textfield__input" type="text" id="cantidad-${index}">
                        <label class="mdl-textfield__label" for="cantidad-${index}">Cantidad</label>
                        </div>
                    </span>

                    <span class="mdl-list__item-primary-content w-30 ml-10">

                        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input value=${producto.precio}  class="mdl-textfield__input" type="text" id="precio-${index}">
                        <label class="mdl-textfield__label" for="precio-${index}">precio</label>
                        </div>
                    </span>

                    <span class="mdl-list__item-primary-content w-10 ml-10">
                      <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored ">
                        <i class="material-icons">remove_shopping_cart</i>
                      </button>
                    </span>
            </li>
    `;
    })


    document.getElementById('lista').append(ul)
}
function start () {
    console.warn(document.querySelector('title').innerText)
}



/*---------------------------*/
/*      ejecuciones          */
/*---------------------------*/
start();
renderLista();


