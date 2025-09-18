// controllers/matriculasController.js
import MatriculaModel from '../models/MatriculaModel.js';

// Criar matrícula
const MatriculaCreate = async (req, res) => {
  try {
    const { aluno_id, curso_id, status } = req.body;

    const matricula = await MatriculaModel.create({
      aluno_id,
      curso_id,
      status
    });

    res.send({
      success: true,
      message: `Matrícula criada com sucesso! ID: ${matricula.id}`,
      data: matricula
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

// Listar todas as matrículas
const MatriculaList = async (req, res) => {
  try {
    const matriculas = await MatriculaModel.findAll();
    res.send(matriculas);
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

// Buscar matrícula por ID
const MatriculaListId = async (req, res) => {
  try {
    const id = req.params.id;
    const matricula = await MatriculaModel.findOne({ where: { id } });

    if (!matricula) {
      return res.status(404).json({
        success: false,
        message: 'Matrícula não encontrada!'
      });
    }

    res.send(matricula);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Falha na requisição: ${error}`
    });
  }
};

// Atualizar matrícula
const MatriculaUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const matriculaExist = await MatriculaModel.findOne({ where: { id } });

    if (!matriculaExist) {
      return res.send({
        success: false,
        message: 'Matrícula não encontrada!'
      });
    }

    await MatriculaModel.update(req.body, { where: { id } });

    res.send({
      success: true,
      message: `Matrícula alterada com sucesso!`
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

// Deletar matrícula
const MatriculaDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const deletado = await MatriculaModel.destroy({ where: { id } });

    if (!deletado) {
      return res.send({
        success: false,
        message: 'Matrícula não encontrada!'
      });
    }

    res.send({
      success: true,
      message: `Matrícula deletada com sucesso!`
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

export default {
  MatriculaCreate,
  MatriculaList,
  MatriculaListId,
  MatriculaUpdate,
  MatriculaDelete
};
