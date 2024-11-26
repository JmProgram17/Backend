function prueba(req, res) {
    res.status(200).send({
        message: 'probando una acción'
    });
}
router.post('/crear', controllerProducto.saveProducto);
function saveProducto(req, res) {
    var myProducto = new Carrera(req.body);
    myProducto.save((err, result) => {
        res.status(200).send({ message: result });
    });
}

function buscarData(req, res) {
    var idProducto = req.params.id;
    Carrera.findById(idProducto).exec((err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error al momento de ejecutar la solicitud' });
        } else {
            if (!result) {
                res.status(404).send({ message: 'El registro a buscar no se encuentra disponible' });
            } else {
                res.status(200).send({ result });
            }
        }
    });
}

router.post('/buscar/:id', controllerProducto.buscarData);
function listarAllData(req, res) {
    var idProducto = req.params.idb;
    if (!idProducto) {
        var result = Producto.find({}).sort('nombre');
    } else {
        var result = Producto.find({ _id: idProducto }).sort('nombre');
    }
    result.exec(function (err, result) {
        if (err) {
            res.status(500).send({ message: 'Error al momento de ejecutar la solicitud' });
        } else {
            if (!result) {
                res.status(404).send({ message: 'El registro a buscar no se encuentra disponible' })
                    ;
            } else {
                res.status(200).send({ result });
            }
        }
    })
}
router.post('/buscar/:id?', controllerProducto.listarAllData);


function updateProducto(req, res) {
    var id = mongoose.Types.ObjectId(req.query.productId);
    Producto.findOneAndUpdate({ _id: id }, req.body, { new: true }, function (err,
        Producto) {
        if (err)
            res.send(err);
        res.json(Producto);
    });
};

function deleteProducto(req, res) {
    var idProducto = req.params.id;
    Carrera.findByIdAndRemove(id, function (err, producto) {
        if (err) {
            return res.json(500, {
                message: 'No hemos encontrado el Producto'
            })
        }
        return res.json(producto)
    });
}

module.exports={
    prueba,
    saveproducto,
    buscarData,
    listarAllData,
    updateProducto,
    deleteProducto
    }

    router.delete('/producto/:id',controllerProducto.deleteProducto);
    router.put('/producto/:id',controllerProducto.updateProducto);