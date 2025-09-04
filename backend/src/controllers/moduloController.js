const ModuloModel = require('../models/moduloModel');

const ModuloCreate = async (req, res) => {
    try {
        const { curso_id, titulo, ordem } = req.body;

        const modulo = await ModuloModel.create({ curso_id, titulo, ordem });

        res.send({
            success: true,
            message: `Módulo criado com sucesso! ID: ${modulo.id}`
        });
    } catch (error) {
        res.send({
            success: false,
            error: `Erro na requisição: ${error}`
        });
    }
};

const ModuloList = async (req, res) => {
    try {
        const modulos = await ModuloModel.findAll();
        res.send(modulos);
    } catch (error) {
        res.send({
            success: false,
            error: `Erro na requisição: ${error}`
        });
    }
};

const ModuloListId = async (req, res) => {
    try {
        const id = req.params.id;
        const modulo = await ModuloModel.findOne({ where: { id } });

        if (!modulo) {
            return res.status(404).json({
                success: false,
                message: 'Módulo não encontrado'
            });
        }

        res.send(modulo);
    } catch (error) {
        res.send({
            success: false,
            error: `Erro na requisição: ${error}`
        });
    }
};

const ModuloUpdate = async (req, res) => {
    try {
        const id = req.params.id;
        const moduloExistente = await ModuloModel.findOne({ where: { id } });

        if (!moduloExistente) {
            return res.send({ success: false, message: 'Módulo não encontrado' });
        }

        await ModuloModel.update(req.body, { where: { id } });

        res.send({
            success: true,
            message: 'Módulo atualizado com sucesso!'
        });
    } catch (error) {
        res.send({ success: false, error: `Erro na requisição: ${error}` });
    }
};

const ModuloDelete = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await ModuloModel.destroy({ where: { id } });

        if (!deleted) {
            return res.send({ success: false, message: 'Módulo não encontrado' });
        }

        res.send({ success: true, message: 'Módulo deletado com sucesso!' });
    } catch (error) {
        res.send({ success: false, error: `Erro na requisição: ${error}` });
    }
};

module.exports = { ModuloCreate, ModuloList, ModuloListId, ModuloUpdate, ModuloDelete };
