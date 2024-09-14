const mongoose = require ('mongoose')
const { title } = require('process')
const logSchema = new mongoose.Schema ({
    title: String,
    entry: String,
    shipIsBroken:{type:Boolean,default:true},
},{timestamps:true})
const myLog = mongoose.model('logs', logSchema)
module.exports = myLog