const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "tambahkan judul"],
        maxlength: [120, "judul tidak boleh leboh dari 120 karakter"]
    },
    description: {
        type: String,
        required: [true],
    },
})

module.exports = mongoose.model.Product || mongoose.model('Product', ProductSchema);