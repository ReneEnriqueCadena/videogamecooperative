const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./videogames')
const genres = require('./genres')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req,res)=> {
    res.send('Index')
})
router.get('/videogames', videogames)
router.get('/genres', genres)


module.exports = router;
