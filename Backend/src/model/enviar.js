const { Model, DataTypes } = require('sequelize');

class enviar extends Model {
    static init(datacon) {
        super.init(
            {                
            
                id_setor: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'cadastros',
                        key: 'id',
                    }
                },

                id_usuario_aquisicao: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'chamados',
                        key: 'id',
                    }
                }

            },
            {
                sequelize: datacon,
                tableName: 'enviars',
                modelName: 'enviar',
            }
        );
    }

    static associate(models) {
        enviar.belongsTo(models.cadastro, {foreignKey: 'id_setor'});
        enviar.belongsTo(models.chamado, {foreignKey: 'id_usuario_aquisicao'});
       
    }
}

module.exports = enviar;