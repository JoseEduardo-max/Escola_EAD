// controllers/usuarioController.js
import userModel from '../models/usuarioModel.js';

// Criar usuário
const UsersCreate = async (req, res) => {
  try {
    const { nome, email, senha, categoria } = req.body;

    const user = await userModel.create({
      nome,
      email,
      senha,
      categoria,
    });

    res.send({
      success: true,
      message: `Usuário criado com sucesso! ID: ${user.id}`,
    });
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição: ${error}`,
    });
  }
};

// Listar todos os usuários
const UsersList = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.send(users);
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição: ${error}`,
    });
  }
};

// Listar usuário por ID
const UsersListId = async (req, res) => {
  try {
    const id = req.params.id;
    const userId = await userModel.findOne({ where: { id } });

    if (!userId) {
      return res.status(404).json({
        success: false,
        message: `Usuário não encontrado!`,
      });
    }

    res.send(userId);
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Falha na requisição: ${error}`,
    });
  }
};

// Atualizar usuário
const UserUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const idValid = await userModel.findOne({ where: { id } });

    if (idValid) {
      await userModel.update(req.body, { where: { id } });
      res.send({
        success: true,
        message: `Usuário alterado com sucesso! ID: ${id}`,
      });
    } else {
      res.send({
        success: false,
        message: 'Usuário não encontrado',
      });
    }
  } catch (error) {
    res.send({
      success: false,
      error: `Erro na requisição: ${error}`,
    });
  }
};

// Deletar usuário
const UserDelete = async (req, res) => {
  try {
    const id = req.params.id;
    await userModel.destroy({ where: { id } });

    res.status(200).send({
      success: true,
      message: `Usuário deletado com sucesso! ID: ${id}`,
    });
  } catch (error) {
    res.send({
      success: false,
      message: `Falha na requisição: ${error}`,
    });
  }
};

// Exportar como default
export default {
  UsersCreate,
  UsersList,
  UsersListId,
  UserUpdate,
  UserDelete,
};
