console.clear()
const Contenedor = require('./contenedor.js');

const productos = new Contenedor('contenedor.txt');

const test = async () => {
	const data = await productos.save({ title: "title", price: "price", thumbnail: "url de la foto del producto" });
	console.log(productos.objects);
}

test();