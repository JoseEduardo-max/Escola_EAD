const Aula = require("../models/aulaModel");

exports.getAll = async (req, res) => {
  try {
    const aulas = await Aula.findAll();
    res.json(aulas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const aula = await Aula.findByPk(req.params.id);
    if (!aula) return res.status(404).json({ error: "Aula não encontrada" });
    res.json(aula);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const nova = await Aula.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [atualizada] = await Aula.update(req.body, {
      where: { id: req.params.id }
    });

    if (atualizada === 0) {
      return res.status(404).json({ error: "Aula não encontrada" });
    }

    const aulaAtualizada = await Aula.findByPk(req.params.id);
    res.json(aulaAtualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletada = await Aula.destroy({
      where: { id: req.params.id }
    });

    if (deletada === 0) {
      return res.status(404).json({ error: "Aula não encontrada" });
    }

    res.json({ message: "Aula deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
