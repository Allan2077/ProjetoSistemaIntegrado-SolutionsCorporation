const { Model, DataTypes } = require('sequelize');

class chamado extends Model {
    static init(datacon) {
        super.init(
            {   
            
                descricao: {
                    type: DataTypes.STRING(640),
                    allowNull: false,
                },

                ocorrencia: {
                    type: DataTypes.STRING(550),
                    allowNull: false,
                },
               

                status: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    
                },

                comentario: {
                    type: DataTypes.STRING(1080),
                    allowNull: false,
                    
                },

                data: {
                    type: DataTypes.DATE,
                    allowNull: false,
                    
                },

                setor: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                    
                },

            },
            {
                sequelize: datacon,
                tableName: 'chamados',
                modelName: 'chamado',
            }
        );
    }

    static associate(models) {
        chamado.hasMany(models.enviar, {foreignKey: 'id_usuario_aquisicao'});
    
    }
}

module.exports = chamado;