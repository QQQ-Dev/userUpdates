const { Schema, model } = require('mongoose')

const schema = new Schema({
    body: { type: String, required: true },
    username: { type: String, required: true },
    userId: {type: String, required:true },
    parentId: { type: String, required: true },
}, {timestamps: true})

module.exports = model('Comment', schema)