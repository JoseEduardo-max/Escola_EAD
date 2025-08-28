const ModuloModel = require("../models/moduloModel");

exports.getAll = async (req, res) => {
    try {
        const modulos = await ModuloModel.getAll();
        res.json(modulos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const modulo = await ModuloModel.getById(req.params.id);
        if (!modulo) return res.status(404).json({ error: "Módulo não encontrado" });
        res.json(modulo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const novo = await ModuloModel.create(req.body);
        res.status(201).json(novo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const atualizado = await ModuloModel.update(req.params.id, req.body);
        res.json(atualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.remove = async (req, res) => {
    try {
        const result = await ModuloModel.remove(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
