
const mongoose = require('mongoose');


mongoose
  .connect("mongodb://localhost:27017/almacen", {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true,
    useFindAndModify: false, 
  })
  .then(() => {
    console.log('La conexión a la base de datos fue correcta...');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });


module.exports = mongoose;
