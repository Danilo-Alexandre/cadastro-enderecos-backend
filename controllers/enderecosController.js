const database = require("../models")

const enderecosController = {
   
    create: async(req,res)=>{
        const {fk_usuario, rua, numero,bairro, cidade, estado, complemento} = req.body
        await database.enderecos.create({
            fk_usuario,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            complemento
        })
        res.send("ok")
    },
    read:async(req,res)=>{
        let enderecos = await database.enderecos.findAll({
            include:[{
                model: database.usuarios,
                as: "usuario",
                attributes: ["nome"]
            }]
        })
        res.send(enderecos)


    },
    update:async(req,res)=>{
        const {fk_usuario, rua, numero,bairro, cidade, estado, complemento} = req.body
        const {id} = req.params
        await database.enderecos.update({
            fk_usuario,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            complemento
        },{
            where:{
                idEndereco: id
            }
        })
        res.send("ok")


    },
    delete:async (req,res)=>{
        const {id} = req.params
        await database.enderecos.destroy({
            where:{
                idEndereco : id
            }
        })
        res.send("ok")

        
    }
}
module.exports = enderecosController
