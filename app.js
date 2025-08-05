const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;

// Configurar Handlebars
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Checker Status - Temporalmente Desactivado',
        userPhone: '+57 322 6922623'
    });
});

// Rutas que redirigen al home (para trollear al usuario 😂)
app.get('/login', (req, res) => {
    res.redirect('/');
});

app.get('/checker', (req, res) => {
    res.redirect('/');
});

app.get('/api', (req, res) => {
    res.redirect('/');
});

app.get('/panel', (req, res) => {
    res.redirect('/');
});

app.get('/admin', (req, res) => {
    res.redirect('/');
});

app.get('/dashboard', (req, res) => {
    res.redirect('/');
});

// Cualquier otra ruta también va al home
app.get('*', (req, res) => {
    res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
