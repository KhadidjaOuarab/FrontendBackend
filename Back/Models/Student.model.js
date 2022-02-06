// create exercice schema using mongoose
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    matricule: Number,
    firstName: String,
    lastName: String,
    group: String,
    exercices: [{   
        guid: Number,
        title: String,           
        description: String,
        dateExo: Date,
        duration: Number,
        level: String 
    }]

});

module.exports = mongoose.model("Student", studentSchema);