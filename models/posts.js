import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Post = new Schema({
    title: { type: String, required: true},
    img: {type: String, required: true},
    author: {type: String, required: true},
    body: {type: String, required: true},
    comments: [{body: String, date: Date, author: String}]
},
{ timestamps: true}
)

export default mongoose.model('posts', Post)