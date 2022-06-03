require('dotenv').config();
const { Sequelize } = require('sequelize');

const cadastro = require('../model/cadastro');
const chamado = require('../model/chamado');
const enviar = require('../model/enviar');


const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, '', {
    host: process.env.HOST,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});

const sync = () => {
    cadastro.init(sequelize);
    chamado.init(sequelize);
    enviar.init(sequelize);
   

    cadastro.associate(sequelize.models);
    chamado.associate(sequelize.models);
    enviar.associate(sequelize.models);
   
    


    sequelize.sync({ force : false });
}

module.exports = {
    sequelize,
    sync
}