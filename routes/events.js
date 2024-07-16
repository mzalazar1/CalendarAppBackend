/*
Event Routes
/api/events
*/

const { Router } = require("express");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
//Todas tienen que pasar por la validacion del JWT

const router = Router();

//Obtener event
router.get("/", validarJWT, getEventos);

//Crear un nuevo evento

router.post("/", validarJWT, crearEvento);

//Actualizar Evento
router.put("/:id", validarJWT, actualizarEvento);

//Eliminar Evento
router.delete("/:id", validarJWT, eliminarEvento);

module.exports = router;
