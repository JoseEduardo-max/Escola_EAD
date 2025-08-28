const AulaModel = require("../models/aulaModel");

exports.getAll = async (req, res) => {
    try {
        const aulas = await AulaModel.getAll();
        res.json(aulas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const aula = await AulaModel.getById(req.params.id);
        if (!aula) return res.status(404).json({ error: "Aula não encontrada" });
        res.json(aula);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const nova = await AulaModel.create(req.body);
        res.status(201).json(nova);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const atualizada = await AulaModel.update(req.params.id, req.body);
        res.json(atualizada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const result = await AulaModel.remove(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
