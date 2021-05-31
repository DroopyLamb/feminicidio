const Usuario = require('../models/usuario');
const { dbConnection } = require('../config/database');
const bcryptjs = require('bcryptjs');

module.exports = app => {


    app.get('/index', (req, res) => {
        res.render('index');
    });

    app.get('/', (req, res) => {
        res.render('index');
    });

    app.get('/Pruebas_escolares_de_HTML', (req, res) => {
        res.render('Pruebas_escolares_de_HTML');
    });
    // Subpáginas
    app.get('/Pagina_con_un_texto', (req, res) => {
        res.render('Pagina_con_un_texto');
    });

    app.get('/Pagina_con_una_tabla', (req, res) => {
        res.render('Pagina_con_una_tabla');
    });
    app.get('/Pagina_con_una_imagen', (req, res) => {
        res.render('Pagina_con_una_imagen');
    });

    app.get('/Pagina_con_un_video', (req, res) => {
        res.render('Pagina_con_un_video');
    });

    app.get('/causas_y_efectos', (req, res) => {
        res.render('causas_y_efectos');
    });

    app.get('/movimientos_feministas', (req, res) => {
        res.render('movimientos_feministas');
    });

    app.get('/Feminicidio', (req, res) => {
        res.render('Feminicidio');
    })

    app.get('/formulario', (req, res) => {
        res.render('formulario');
    });

    app.get('/Administracion', (req, res) => {
        res.render('Administracion');
    });

    app.get('/encuentro', (req, res) => {
        res.render('encuentro');
    });

    app.get('/onu', (req, res) => {
        res.render('onu');
    });

    //Rutas CRUD
    //Método post
    app.get('/vistaPrueba', (req, res) => {
        res.render('vistaPrueba');
    });

    app.post('/formulario', (req, res) => {
        let { usuario, nombre, password, password2, correo, telefono, terminos } = req.body;
        console.log(req.body);

        console.log(password);
        console.log(password2);
        if (password === password2) {
            // Encriptación de contraseña, una sola vía
            const salt = bcryptjs.genSaltSync(12); //Número de evueltas que dará
            password = bcryptjs.hashSync(password, salt);
            if (terminos === 'on') {
                terminos = true;
                // Creamos un objeto del tipo usuario con esos valores
                let user = new Usuario({
                    usuario,
                    nombre,
                    password,
                    correo,
                    telefono,
                    terminos
                });
                // Grabar en la base de datos
                user.save((err, usuarioDB) => {
                    if (err) {
                        return res.status(400).json({
                            ok: false,
                            err
                        });
                    }
                    res.json({
                        ok: true,
                        usuario: usuarioDB
                    });

                });
            }
        } else {
            res.redirect('formulario');
        }

    });

    app.get('/usuarios', (req, res) => {
        Usuario.find({})
            .exec((err, usuarios) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err
                    });
                }
                if (usuarios) {

                    console.log(usuarios);
                    res.render('usuarios', {
                        usuarios
                    });
                }

            })
    });


};