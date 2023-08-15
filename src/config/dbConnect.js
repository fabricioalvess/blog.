import mongoose from 'mongoose'
mongoose.connect("mongodb+srv://fabricio:123@blog.qcogegg.mongodb.net/blog")
let db = mongoose.connection
export default db