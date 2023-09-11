import Usuarios from "../models/usuario"

async function findAll(req, res) {
  const Usuario = await Usuarios.findAll();
  res.json(Usuario);
}

export default { findAll };