const Exercice = require("../Models/Exercice.model");
const exerciceController = {};


exerciceController.createExercice = async function (req, res) {
  const exercice = new Exercice({
    guid: req.body.guid,
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    duration: req.body.duration,
    level: req.body.level,
   // students: [{ type: Schema.Types.ObjectId, ref: "Student" }]

  });
  try {
    await exercice.save();
    res.status(201).json({
      message: "exercice created successfully",
      actor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating exercice",
      error,
    });
  }
};


actorsController.getAllExercices = async function (req, res) {
  console.log("GET /getAllExercices");
  let exercices;
  try {
    exercices = await Exercice.find();
    res.send(exercices);
  } catch (error) {
    res.status(500).send(error);
  }
};

actorsController.getSingleExercice = async function (req, res) {
  console.log("GET /getSingleExercice/:id");
  let exercice;
  try {
   // if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    exercice = await Exercice.find({ guid : req.params.guid});
    res.send(exercice);//}
  } catch (error) {
    res.status(500).send(error);
  }
};


actorsController.updatetSingleActor = async function (req, res) {
  console.log("GET /actors/:id");
  let actor;
  try {
    actor = await Actor.findOneAndUpdate({id : req.params.id}, {$set: req.body}, {new : true} );
    if (actor){
    res.send(actor);}
  } catch (error) {
    res.status(500).send(error);
  }
};


actorsController.deleteSingleActor = async function (req, res) {
  console.log("GET /actors/:id");
  let actor;
  try {
    actor = await Actor.findOneAndDelete({id : req.params.id} );
    if (actor){
    res.send(actor);}
  } catch (error) {
    res.status(500).send(error);
  }
};


module.exports = actorsController;