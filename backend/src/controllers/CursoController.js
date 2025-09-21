// controllers/CursoController.js
import CursoModel from '../models/cursoModel.js';

const CursoList = async (req, res, next) => {
  try {
    const cursos = await CursoModel.findAll();
    res.send(cursos);
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição ${error}`
    });
  }
};

const CursoListId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const curso = await CursoModel.findOne({ where: { id } });
    if (!curso) {
      return res.status(404).json({
        success: false,
        message: `Curso não encontrado!`
      });
    }
    res.send(curso);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Falha ao listar o curso! ${error}`
    });
  }
};

const CursoCreate = async (req, res, next) => {
  try {
    const { titulo, descricao, publico_alvo, img_capa, categoria } = req.body;

    const curso = await CursoModel.create({
      titulo,
      descricao,
      publico_alvo,
      img_capa,
      categoria
    });

    res.status(201).send({
      success: true,
      message: `Curso criado com sucesso! ID: ${curso.id}`
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Erro na requisição ${error}`
    });
  }
};

const CursoUpdate = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cursoExistente = await CursoModel.findOne({ where: { id } });

    if (!cursoExistente) {
      return res.status(404).send({
        success: false,
        message: `Curso não encontrado!`
      });
    }

    await CursoModel.update(req.body, { where: { id } });

    res.status(200).send({
      success: true,
      message: `Curso modificado com sucesso!`
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: `Falha na alteração do curso! ${error}`
    });
  }
};

const CursoDelete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deletado = await CursoModel.destroy({ where: { id } });

    if (!deletado) {
      return res.status(404).send({
        success: false,
        message: `Curso não encontrado!`
      });
    }

    res.status(200).send({
      success: true,
      message: `Curso deletado com sucesso!`
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: `Erro ao deletar o curso! ${error}`
    });
  }
};

export default {
  CursoList,
  CursoListId,
  CursoCreate,
  CursoUpdate,
  CursoDelete
};
