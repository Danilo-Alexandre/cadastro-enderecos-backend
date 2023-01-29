module.exports = (sequelize, DataType)=>{
    const Enderecos = sequelize.define("enderecos", {
        idEndereco: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        fk_usuario: {
            type: DataType.INTEGER,
            notNull: true

        },
        rua: {
            type: DataType.STRING,
            notNull: true

        },
        numero: {
            type: DataType.INTEGER,
            notNull: true
        },

        bairro: {
            type: DataType.STRING,
            notNull: true
        },

        cidade:{
            type: DataType.STRING,
            notNull: true
        },

        estado: {
            type: DataType.STRING,
            notNull: true
        },
        complemento: DataType.STRING

    },{
        tableName:"enderecos",
        timestamps: false
    })
    
    Enderecos.associate = (models) => {
        Enderecos.belongsTo(models.usuarios, {
            foreignKey: "fk_usuario",
            as: "usuario"
        })
    }
    
    return Enderecos
}