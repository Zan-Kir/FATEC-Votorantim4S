const express = require("express");
const router = express.Router();

let usuarios = [
  { id: 1, nome: "João", email: "joao@email.com" },
  { id: 2, nome: "Maria", email: "maria@email.com" },
  { id: 3, nome: "Pedro", email: "pedro@email.com" },
];

router.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

router.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ message: "Nome e e-mail são obrigatórios!" });
  }

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

router.get("/ok", (req, res) => {
  res.status(200).json({ message: "OK" });
});

module.exports = router;
