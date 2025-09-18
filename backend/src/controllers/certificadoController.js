// controllers/certificadoController.js
import CertificadoModel from '../models/certificadoModel.js';

// CREATE
const CertificadoCreate = async (req, res) => {
  try {
    const { aluno_id, curso_id, codigo_certificado } = req.body;

    const certificado = await CertificadoModel.create({ aluno_id, curso_id, codigo_certificado });

    res.send({
      success: true,
      message: `Certificado criado com sucesso! ID: ${certificado.id}`
    });
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição: ${error}`
    });
  }
};

// READ - listar todos
const CertificadoList = async (req, res) => {
  try {
    const certificados = await CertificadoModel.findAll();
    res.send(certificados);
  } catch (error) {
    res.send({ success: false, error: `Erro na requisição: ${error}` });
  }
};

// READ - por ID
const CertificadoListId = async (req, res) => {
  try {
    const id = req.params.id;
    const certificado = await CertificadoModel.findOne({ where: { id } });

    if (!certificado) {
      return res.status(404).json({ success: false, message: 'Certificado não encontrado' });
    }

    res.send(certificado);
  } catch (error) {
    res.send({ success: false, error: `Erro na requisição: ${error}` });
  }
};

// UPDATE
const CertificadoUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const certificadoExistente = await CertificadoModel.findOne({ where: { id } });

    if (!certificadoExistente) {
      return res.send({ success: false, message: 'Certificado não encontrado' });
    }

    await CertificadoModel.update(req.body, { where: { id } });

    res.send({ success: true, message: 'Certificado atualizado com sucesso!' });
  } catch (error) {
    res.send({ success: false, error: `Erro na requisição: ${error}` });
  }
};

// DELETE
const CertificadoDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await CertificadoModel.destroy({ where: { id } });

    if (!deleted) {
      return res.send({ success: false, message: 'Certificado não encontrado' });
    }

    res.send({ success: true, message: 'Certificado deletado com sucesso!' });
  } catch (error) {
    res.send({ success: false, error: `Erro na requisição: ${error}` });
  }
};

export default {
  CertificadoCreate,
  CertificadoList,
  CertificadoListId,
  CertificadoUpdate,
  CertificadoDelete
};
