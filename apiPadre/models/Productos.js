const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productosSchema = new Schema({
  nombre: {
    type: String,
    trim: true,
  },
  precio: {
    type: Number,
  },
  imagen: {
    type: String,
  },
  activo: {
    type: Boolean,
  },
});
module.exports = mongoose.model("Productos", productosSchema);
