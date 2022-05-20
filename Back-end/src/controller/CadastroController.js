const Cadastro = require('../model/cadastro');

const create = async (req, res) => {
    const data = req.body;

    let ret = [];

    try {
        ret = await Cadastro.create(data);

        delete ret.dataValues.senha;
    }catch(err) {
        console.log(err);
        // if(err !== 'ER_DUP_ENTRY') {
        //     ret = {
        //         msg: 'Usuario já cadastrado'
        //     }
        //     res.status(400);
        // }
    }

    res.json(ret);
}

const read = async (req, res) => {
    let filtro = {};
    
    let id = req.params.id;

    if(id != undefined) filtro = { where : { id: id }}

    const ret = await Cadastro.findAll(filtro);

    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Cadastro.update(data, {
        where : { id: id}
    });

    ret = await Cadastro.findAll({ 
        attributes: {
            exclude: ['matricula']
        },
        where : {id: id}
    })

    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;

    const ret = await Cadastro.destroy({
        where: {id: id}
    })
    
    if(ret == 1) {
        res.json({id: id});
    }else {
        res.status(400).send();
    }
}

const login = async (req, res) => {
    const data = req.body;

    console.log(data);

    const ret = await Cadastro.findAll({
        attributes: {
            exclude: ['matricula']
        },
        where: {
            usuario: data.usuario,
            matricula: data.matricula,
        }
    });

    res.json(ret);
}

module.exports = {
    create,
    read,
    update,
    remove,
    login,
}