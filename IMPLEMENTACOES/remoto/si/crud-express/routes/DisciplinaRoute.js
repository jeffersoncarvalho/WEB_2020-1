var express = require('express')
var router = express.Router()
var disciplinaService = require('../services/DisciplinaService')

router.post('/register', function (req, res, next) {
    const disciplina = disciplinaService.register(req.body)
    return res.json(disciplina)
})

router.get('/list', function (req, res, next) {
    return res.json(disciplinaService.list())
})

router.put('/update/:id', function (req, res, next) {
    const disciplina = disciplinaService.update(req.params.id, req.body);
    return res.json(disciplina);
})

router.delete('/delete/:id', function (req, res, next) {
    const ok = disciplinaService.delete(req.params.id);
    if (ok) return res.json({ "sucess": true });
    else return res.json({ "sucess": false });
})

router.get('/retrieve/:id', function (req, res, next) {
    const disciplina = disciplinaService.retrieve(req.params.id);
    return res.json(disciplina);
})

module.exports = router;