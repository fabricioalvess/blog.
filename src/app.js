import express from 'express'
import db from './config/dbConnect.js'
import router from './routes/index.js'
db.on("error", console.log.bind(console, 'Erro de conexao'))
db.once("open", ()=>{console.log('conexao com o banco OK!')})
const app = express()
app.use(express.json())
router(app)
export default app