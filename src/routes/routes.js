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

    app.get('/Formulario', (req, res) => {
        res.render('Formulario');
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

};