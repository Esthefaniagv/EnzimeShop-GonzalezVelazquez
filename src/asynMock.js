const products = [
    {
        id: 1,
        name: 'Stone Mug',
        category: 'Home',
        price: 15000,
        img: 'https://images.pexels.com/photos/3010771/pexels-photo-3010771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 10,
        description: 'Curated mate finish mug handmade with white clay and river stone.'
    },
    {
        id: 2,
        name: 'Vitro Mug',
        category: 'Tableware',
        price: 16000,
        img: 'https://images.pexels.com/photos/8549590/pexels-photo-8549590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 8,
        description: 'Reflective line, with shiny finishes of handmade ceramic resistant to high temperatures. '
    },

    {
        id: 3,
        name: 'Elevate travel',
        category: 'Decoration',
        price: 19000,
        img: 'https://images.pexels.com/photos/11889166/pexels-photo-11889166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 8,
        description: 'Rustic finish using materials from the Amazon, combined wood and ceramic technique. '
    },

    {
        id: 4,
        name: 'Doom whine',
        category: 'Kitchen',
        price: 19000,
        img: 'https://images.pexels.com/photos/4038219/pexels-photo-4038219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 8,
        description: 'Rustic finish using materials from the Amazon, combined wood and ceramic technique. '
    },

    {
        id: 5,
        name: 'Armonia Apron',
        category: 'Kitchen',
        price: 9000,
        img: 'https://images.pexels.com/photos/6957998/pexels-photo-6957998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 8,
        description: 'Rustic finish using materials from the Amazon, combined wood and ceramic technique. '
    }

]

//funcion que se trae todos los productos
const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

//para ver el detalle de producto 

const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id == productId))
        }, 500)
    })
}

const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category == categoryId))
        }, 500)
    })
}

export { getProducts, getProductById, getProductsByCategory}