const Certificado = require("../models/certificadoModel");

exports.getAll = async (req, res) => {
  try {
    const certificados = await Certificado.findAll();
    res.json(certificados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const certificado = await Certificado.findByPk(req.params.id);
    if (!certificado) return res.status(404).json({ error: "Certificado não encontrado" });
    res.json(certificado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const novo = await Certificado.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [atualizado] = await Certificado.update(req.body, {
      where: { id: req.params.id }
    });

    if (atualizado === 0) {
      return res.status(404).json({ error: "Certificado não encontrado" });
    }

    const certificadoAtualizado = await Certificado.findByPk(req.params.id);
    res.json(certificadoAtualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletado = await Certificado.destroy({
      where: { id: req.params.id }
    });

    if (deletado === 0) {
      return res.status(404).json({ error: "Certificado não encontrado" });
    }

    res.json({ message: "Certificado removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
