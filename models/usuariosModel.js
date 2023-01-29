module.exports = (sequelize, DataType)=>{
    const Usuarios = sequelize.define("usuarios",{
        idUsuario: {
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        nome: {
            type: DataType.STRING,
            notNull: true
        },
        email: {
            type: DataType.STRING,
            notNull: true
        },
        senha:{
            type: DataType.STRING,
            notNull: true
        }
    },{
        tableName:"usuarios",
        timestamps: false
    })

    Usuarios.associate = (models)=>{
        Usuarios.hasMany(models.enderecos,{
            foreignKey: "fk_usuario",
            as: "enderecos"
        })
    }


    return Usuarios


}