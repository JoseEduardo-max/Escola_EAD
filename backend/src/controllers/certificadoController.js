const CertificadoModel = require("../models/certificadoModel");

exports.getAll = async (req, res) => {
    try {
        const certificados = await CertificadoModel.getAll();
        res.json(certificados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const certificado = await CertificadoModel.getById(req.params.id);
        if (!certificado) return res.status(404).json({ error: "Certificado não encontrado" });
        res.json(certificado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const novo = await CertificadoModel.create(req.body);
        res.status(201).json(novo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const atualizado = await CertificadoModel.update(req.params.id, req.body);
        res.json(atualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const result = await CertificadoModel.remove(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
