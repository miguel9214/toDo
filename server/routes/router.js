const express = require("express");
const { createTask,getTasks,updateTask,deleteTask } = require("../controllers/TaskControllers");
const router = express.Router();
// getUsers, updateUser, deleteUser, userLogin

//Ruta de prueba
router.get("/", (req, res) => {
  res.send({ message: "Hola Mundo. ruta principal" });
});

//Operaciones CRUD
router.post("/createTask", createTask);
router.get("/getTasks", getTasks);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

// router.post("/login", userLogin); //Ruta de login usuario

module.exports = router