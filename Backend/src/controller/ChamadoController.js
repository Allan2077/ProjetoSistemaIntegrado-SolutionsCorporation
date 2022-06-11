const Chamado = require('../model/chamado');
const { Op } = require("sequelize");

const create = async (req, res) => {
    const data = req.body;

    console.log(data);

    const ret = await Chamado.create(data);

    res.json(ret);
}

const read = async (req, res) => {
    const id = req.params.id;

    let filtro = {};

    if(id !== undefined) filtro = {where: {id: id}};

    const ret = await Chamado.findAll(filtro);

    //const ret = await Alerta.findAll((req.params.id) ? {where: {id: req.params.id}} : {});

    res.json(ret);
}

const getSize = async (req, res) => {
    const id = req.params.id;

    let filtro = {};

    if(id !== undefined) filtro = {where: {id: id}};

    const ret = await Chamado.count();

    //const ret = await Alerta.findAll((req.params.id) ? {where: {id: req.params.id}} : {});

    res.json(ret);
}

const readFinalizadosBySetor = async (req, res) => {
    const setor = req.params.setor

    console.log(setor)

    let ret = await Chamado.findAll({where: {
        // BUSCAR POR SETOR IGUAL A SETOR
        setor,
        // BUSCAR POR STATUS NÃO IGUAS A 3 // OUN SEJA, DIFERENTE DE FINALIZADO
        status: {
            [Op.ne]: 3, 
        }
    }})


    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Chamado.update(data, {where:{id: id}});

    ret = await Chamado.findAll({where: {id: id}});

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Chamado.destroy({where: {id: id}});

    if(ret == 1) {
        res.json({id: id})
    }else {
        res.status(400).send();
    }

    //(ret == 1) ? res.json({id: id}) : res.status(400).send();
    //res.json({id: (ret == 1) ? id : 0});
}

module.exports = {
    create,
    read,
    update,
    remove,
    readFinalizadosBySetor,
    getSize
}