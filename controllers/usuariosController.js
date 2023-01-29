const database = require("../models")

const usuariosController = {
   
    create: async(req,res)=>{
        const {nome, email, senha} = req.body
        await database.usuarios.create({
            nome,
            email,
            senha,
        })
        res.send("ok")
    },
    read:async(req,res)=>{
        let usuarios = await database.usuarios.findAll()
        res.send(usuarios)


    },
    update:async(req,res)=>{
        const {nome, email, senha} = req.body
        const {id} = req.params
        await database.usuarios.update({
            nome,
            email,
            senha,
        },{
            where:{
                idUsuario: id
            }
        })
        res.send("ok")


    },
    delete:async (req,res)=>{
        const {id} = req.params
        await database.usuarios.destroy({
            where:{
                idUsuario : id
            }
        })
        res.send("ok")

        
    }
}
module.exports = usuariosController
