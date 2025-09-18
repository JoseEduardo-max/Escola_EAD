// controllers/aulaController.js
import AulaModel from '../models/aulaModel.js';

// CREATE
const AulasCreate = async (req, res) => {
  try {
    const { titulo, descricao, video_url, modulo_id, ordem, duracao } = req.body;

    const aula = await AulaModel.create({
      titulo,
      descricao,
      video_url,
      modulo_id,
      ordem,
      duracao
    });

    res.send({
      success: true,
      message: `Aula criada com sucesso! ID: ${aula.id}`
    });
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

// READ - listar todas
const AulasList = async (req, res) => {
  try {
    const aulas = await AulaModel.findAll();
    res.send(aulas);
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

// READ - por ID
const AulasListId = async (req, res) => {
  try {
    const id = req.params.id;
    const aula = await AulaModel.findOne({ where: { id } });
    if (!aula) {
      return res.status(404).json({
        success: false,
        message: 'Aula não encontrada!'
      });
    }
    res.send(aula);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Falha na requisição: ${error}`
    });
  }
};

// UPDATE
const AulasUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const aulaExist = await AulaModel.findOne({ where: { id } });

    if (!aulaExist) {
      return res.send({
        success: false,
        message: 'Aula não encontrada!'
      });
    }

    await AulaModel.update(req.body, { where: { id } });

    res.send({
      success: true,
      message: `Aula alterada com sucesso!`
    });
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

// DELETE
const AulasDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const deletado = await AulaModel.destroy({ where: { id } });

    if (!deletado) {
      return res.send({
        success: false,
        message: 'Aula não encontrada!'
      });
    }

    res.send({
      success: true,
      message: `Aula deletada com sucesso!`
    });
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

export default {
  AulasCreate,
  AulasList,
  AulasListId,
  AulasUpdate,
  AulasDelete
};
