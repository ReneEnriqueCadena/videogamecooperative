const Router = require('express')
const { allVideogames } = require('../controllers/videogameController')

const router = Router()

router.get('/', allVideogames)
router.post('/', )

module.exports = router