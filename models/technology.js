const mongoose = require("mongoose")
const technologySchema = mongoose.Schema({
Tech_Name: String,
Tech_Type: String,
Tech_Age: Number
})
module.exports = mongoose.model("technology",technologySchema) 