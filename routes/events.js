/*
Event Routes
/api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/vallidar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

//Todas tienen que pasar por la validacion del JWT

const router = Router();
router.use(validarJWT);

//Obtener event
router.get("/", getEventos);

//Crear un nuevo evento

router.post(
  "/",
  [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalización es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

//Actualizar Evento
router.put("/:id", actualizarEvento);

//Eliminar Evento
router.delete("/:id", eliminarEvento);

module.exports = router;
