// create exercice schema using mongoose
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    matricule: Number,
    firstName: String,
    lastName: String,
    group: String,
    exercices: [{ type: Schema.Types.ObjectId, ref: "Exercice" }]

});

module.exports = mongoose.model("Student", studentSchema);