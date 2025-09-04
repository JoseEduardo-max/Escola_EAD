const CursoModel = require('../models/CursoModel')

const CursoList = async (req,res, next) => {

    try {
        const Cursos = await CursoModel.findAll()
        res.send(Cursos)
    } catch (error) {
        res.send ({
            'sucess': false,
            'error':`Erro na requisição ${error}`
        })
    }
}

const CursoListId = async (req,res,next) => {
    try {
        const id = req.params.id
        const CursoId = await CursoModel.findOne(
            { where: { id } });
        if (!CursoId) {
            return res.status(404).json({
                sucess: false,
                message:`Curso não encontrada!!`
            })
        } 

        res.send(CursoId)
      

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: `Falha ao listar a Curso! ${error}`
            })

        }

} 



const CursoCreate = async (req,res,next) => {
    try {
        const titulo = req.body.titulo
        const descricao = req.body.descricao
        const publico_alvo = req.body.publico_alvo
        const img_capa = req.body.img_capa
        const categoria = req.body.categoria
        

        const curso = await CursoModel.create({
            titulo:titulo,
            descricao:descricao,
            publico_alvo:publico_alvo,
            img_capa:img_capa,
            categoria:categoria

        })

        res.status(201).send({
            'sucess':true,
            'message':`Curso criada com sucesso! ${curso.id - curso.titulo}`
        })

    } catch (error) {
        res.status(400).send({
            'sucess': false,
            'error': `erro na requisição ${error}`
        })
    }
}



const CursoUpdate = async (req,res,next) => {
    try {
        const id = req.params.id
        const curso = await CursoModel.update(req.body, {
            where: { id }
        });

        if (curso == true) {
            res.status(204).send({
                'sucess':true,
                'message':`Curso modificado com sucesso!`
            })
        } else {
            res.status(400).send({
                'sucess':true,
                'message':`Curso não encontrado!`
            })
        }


    } catch (error) {
        res.status(404).send({
            'sucess': false,
            'message': `Falha na alteração do curso! ${error}`
        })
    }
}


const CursoDelete = async (req,res,next) => {
    try {
        const id = req.params.id
        const curso = await CursoModel.destroy({
            where: {id}
        })

    if (curso == true) {
        res.status(204).send({
            'sucess':true,
            'message':`Curso deletado com sucesso!`
        })
    } else {
        res.status(400).send({
            'sucess':true,
            'message':`Curso não encontrado!`
        })
    }

        
    } catch (error) {
        res.status(404).send({
            'sucess':false,
            'message':`Erro ao deletar Curso! ${error}`
        })
    }
}


module.exports = {
    CursoList,CursoListId , CursoCreate, CursoUpdate, CursoDelete}