const userModel = require ('../models/usuarioModel')



const UsersCreate = async(req,res,next)=>{
    try{
        const nome = req.body.nome
        const email = req.body.email
         const senha = req.body.senha
        const categoria = req.body.categoria 
       

        
        // const bcrypt = require ('bcrypt')
        // const saltRound = 10
        // const hash = await bcrypt.hash(password, saltRound)

        const user = await userModel.create ({
            nome: nome,
            email: email,
            senha: senha,
            categoria: categoria
        });

        res.send({
            'sucess':true,
            'message':`Usuário criado com sucesso! ID: ${user.id - user.name}`
        })
    } catch (error){
        res.send({
            'sucess':false,
            'error':`erro na requisição ${error}`
        })
    }
  }

  





module.exports={ UsersCreate};