import express from "express"
import artigos from "./artigosRoutes.js"
const routes = (app)=>{
    app.route('/').get((req,res)=>{
        res.status(200).send({titulo:"artigos do Blog"})
    })
    app.use(
        express.json(),
        artigos
    )
}
export default routes