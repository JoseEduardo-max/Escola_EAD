const Modulo = require("../models/moduloModel");

exports.getAll = async (req, res) => {
  try {
    const modulos = await Modulo.findAll();
    res.json(modulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const modulo = await Modulo.findByPk(req.params.id);
    if (!modulo) return res.status(404).json({ error: "Módulo não encontrado" });
    res.json(modulo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const novo = await Modulo.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [atualizado] = await Modulo.update(req.body, {
      where: { id: req.params.id }
    });

    if (atualizado === 0) {
      return res.status(404).json({ error: "Módulo não encontrado" });
    }

    const moduloAtualizado = await Modulo.findByPk(req.params.id);
    res.json(moduloAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletado = await Modulo.destroy({
      where: { id: req.params.id }
    });

    if (deletado === 0) {
      return res.status(404).json({ error: "Módulo não encontrado" });
    }

    res.json({ message: "Módulo removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
