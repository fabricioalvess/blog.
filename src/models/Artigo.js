import mongoose from "mongoose";
const { Schema } = mongoose;
const artigoSchema = new Schema(
    {
        id:{type:String},
        texto:{type:String, required:true}
    }
)
const artigos = mongoose.model('artigos', artigoSchema) 
export default artigos