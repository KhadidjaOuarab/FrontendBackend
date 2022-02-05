const Exercice = require("../Models/Exercice.model")
const exerciceController = {};
const Student = require("../Models/Student.model")

exerciceController.createExercice = async function (req, res) {
 
  const exercice = new Exercice({
    guid: req.body.guid,
    title: req.body.title,
    description: req.body.description,
    dateExo: req.body.dateExo,
    duration: req.body.duration,
    level: req.body.level //,
    //students: req.body.students

  });
  try {
   
    await exercice.save();

    let student = new Student({
      matricule: "31059",
      exercices: exercice._id   
    });

    student.save();


    //********************************* */
    res.status(201).json({
      message: "exercice created successfully",
      exercice,
    });
  } catch (error) {
     res.status(500).json({
      message: "Error occured while creating exercice",
      error: error
    });
  }
};


// exerciceController.getAllExercices = async function (req, res) {
//   console.log("GET /getAllExercices");
//   let exercices;
//   try {
//     exercices = await Exercice.find();
//     res.send(exercices);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// exerciceController.getSingleExercice = async function (req, res) {
//   console.log("GET /getSingleExercice/:id");
//   let exercice;
//   try {
//    // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
//     exercice = await Exercice.find({ guid : req.params.guid});
//     res.send(exercice);//}
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };


// exerciceController.updatetSingleExercice = async function (req, res) {
//   console.log("GET /updatetSingleExercice/:id");
//   let exercice;
//   try {
//     exercice = await Exercice.findOneAndUpdate({guid : req.params.guid}, {$set: req.body}, {new : true} );
//     if (exercice){
//     res.send(exercice);}
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };


// exerciceController.deleteSingleExercice = async function (req, res) {
//   console.log("GET /deleteSingleExercice/:id");
//   let exercice;
//   try {
//     exercice = await Exercice.findOneAndDelete({guid : req.params.guid} );
//     if (exercice){
//     res.send(exercice);}
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };


module.exports = exerciceController;