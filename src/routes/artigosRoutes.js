import express from 'express'
import ArtigoController from "../controllers/artigosController.js";
const router = express.Router()
router
    .get('/artigos',ArtigoController.listarArtigos)
    .get('/artigos/:id', ArtigoController.obterArtigoPorId)
    .post('/artigos', ArtigoController.cadastraArtigos)
    .put('/artigos/:id', ArtigoController.atualizarArtigo)
    .delete('/artigos/:id', ArtigoController.excluirArtigo)
export default router
