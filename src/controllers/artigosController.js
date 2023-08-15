import artigos from "../models/Artigo.js";
class ArtigoController{
    static obterArtigoPorId = (req,res)=>{
        const id = req.params.id
        artigos.findById(id,(err, artigos)=>{
            if(err){
                res.status(400).send({message:`${err.message} - Id do livro nao localizado`})
            }else{
                res.status(200).send(artigos)
            }
        })
    }
    static listarArtigos = async(req,res)=>{
        try{
            const resultadoArtigoartigos = await artigos.find()
            res.status(200).json(resultadoArtigoartigos)
        }catch(err){
            res.status(500).json(err)
        }
    }
    static cadastraArtigos = (req,res)=>{
        let artigo = new artigos(req.body)
        artigo.save((err)=>{
            if(err){
                res.status(500).send({message: ` ${err.message} - falha ao cadastra livro`})
            }else{
                res.status(201).send(artigo.toJSON())
            }
        })
    } 
    static atualizarArtigo = (req,res)=>{
        const id = req.params.id
        artigos.findByIdAndUpdate(id,{
            $set:req.body
        },(err)=>{
            if(!err){
                req.status(200).send({message:'Artigo Atualizado'})
            }else{
                req.status(500).send({message:err.message})
            }
        })
    }
    static excluirArtigo = (req,res)=>{
        const id = req.params.id
        artigos.findByIdAndDelete(id,(err)=>{
            if(!err){
                res.status(200).send({message:'artigo removido'})
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }
}
export default ArtigoController