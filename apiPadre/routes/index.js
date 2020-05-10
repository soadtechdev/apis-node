const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const productosController = require("../controllers/productosController");

module.exports = function () {
  /** ## CLIENTES ## */

  //Agregar nuevos cliente via POST
  router.post("/clientes", clienteController.nuevoCliente);

  //obtener todos los clientes
  router.get("/clientes", clienteController.mostrarClientes);

  //muestra un cliente en especifico
  router.get("/clientes/:idCliente", clienteController.mostrarCliente);

  //actualizar cliente
  router.put("/clientes/:idCliente", clienteController.actualizarCliente);

  //eliminar un cliente
  router.delete("/clientes/:idCliente", clienteController.eliminarCliente);

  /** ## PRODUCTOS ## */

  //nuevos productos
  router.post(
    "/productos",
    productosController.subirArchivo,
    productosController.nuevoProducto
  );

  //muestra todos lso productos
  router.get("/productos", productosController.mostrarProductos);

  //muestra un producto por su id
  router.get("/productos/:idProducto", productosController.mostrarProducto);

  //actualizar producto
  router.put(
    "/productos/:idProducto",
    productosController.subirArchivo,
    productosController.actualizarProducto
  );

  //eliminar productos por id
  router.delete("/productos/:idProducto", productosController.eliminarProducto);
  return router;
};
