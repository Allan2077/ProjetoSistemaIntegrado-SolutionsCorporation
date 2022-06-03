const { Model, DataTypes } = require('sequelize');

class cadastro extends Model {
    static init(datacon) {
        super.init(
            {

                usuario: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: {
                            msg: "Usuario ou Matricula invalido",
                        }
                    }
                    
                },

                nome: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                setor: {
                    type: DataTypes.STRING(150),
                    allowNull: false,
                },

                matricula: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    
                }
            
            },
            {
                sequelize: datacon,
                tableName: 'cadastros',
                modelName: 'cadastro',
            }
        );
    }

    static associate(models) {
        cadastro.hasMany(models.enviar,{ foreignKey: 'id_setor'});
    }

}

module.exports = cadastro;