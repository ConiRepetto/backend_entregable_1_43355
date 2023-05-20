// Se creará una instancia de la clase “ProductManager”
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
// Se llamará al método “addProduct” con los campos:
// title: “producto prueba”
// description:”Este es un producto prueba”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo



class ProductManager {

    #products

    constructor() {
        this.#products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            id: this.#products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        const existsProduct = this.#products.find((element) => {
            return element.id == product.id
        })
        const existsCode = this.#products.find((element) => {
            return element.code == product.code
        })


        if (existsProduct || existsCode) {
            console.log('Error: Producto ya agregado a la lista')
        } else {
            this.#products.push(product)
            console.log("Producto Nuevo agregado correctamente");
        }
    }

    getProducts() {
        return this.#products;
    }

    getProductById(id) {
        return this.#products.find((element) => {
            return element.id == id
        }) || 'ID no encontrado';
    }

}

let product1 = new ProductManager()



console.log(product1.addProduct('queso', 'queso', 200, 'no def', 'abc1', 10))
console.log(product1.addProduct('quesito', 'queso', 300, 'no def', 'abc2', 100))
console.log(product1.addProduct('quesito', 'queso', 300, 'no def', 'abc2', 100))
console.log(product1.getProducts())
console.log(product1.getProductById(1));
console.log(product1.getProductById(3));