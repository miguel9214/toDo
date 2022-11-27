const Task = require("../models/TaskModel");

//CREAR TAREA
const createTask = (req, res) => {
  const { body } = req;
  const newTask = new Task({
    title: body.title,
    description: body.description,
  });

  newTask.save();
  res.send({ message: "Tarea creada" });
};

//OBTENER TAREAS
const getTasks = (req, res) => {
  Task.find({}, (err, docs) => {
    if (docs) {
      res.status(200).send({ docs });
    } else if (!docs) {
      res.send({ message: "No hay documentos en la coleccion" });
    } else {
      res.send({ message: `Error del servidor: ${err}` });
    }
  });
};

//OBTENER TAREAS
const updateTask = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const taskToUpdate = {
    title: body.title,
    description: body.description,
  };

  Task.findOne({ title: taskToUpdate.title }, (err, taskFinded) => {
    if (err) {
      res.status(500).send("Error del servidor: " + err);
    } else if (taskFinded) {
      if (taskFinded.id !== idToUpdate) {
        res.send({
          message: "La tarea ya creada.",
          task: taskFinded,
        });
      } else {
        Task.findByIdAndUpdate(
          idToUpdate,
          taskToUpdate,
          { returnDocument: "after" },
          (err, taskUpdated) => {
            if (err) {
              res.send({ message: `Error del servidor: ${err}` });
            } else if (!taskUpdated) {
              res.send({ message: `Tarea no encontrada` });
            } else {
              res.status(200).send({ message: `Tarea actualizada` });
            }
          }
        );
      }
    }
  });
};

const deleteTask = (req, res) => {
  const idToDelete = req.params.id;

  //declaramos la query findOneAndRemove para eliminar la tarea
  Task.findOneAndRemove({ _id: idToDelete }, (err, taskDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (!taskDeleted) {
      res.send({ message: "La tarea no existe en la base de datos" });
    } else {
      res.send({ message: "La tarea fue eliminada", task: taskDeleted });
    }
  });
};

// //ToDo: loguear el usuario
// const userLogin = (req, res) => {
//   res.send({ message: "Login On" });
// };

// //funcion para actualizar usuario en el endPoint update
// function userFindAndUpdate(id, user, res) {
//   User.findByIdAndUpdate(id, user, { new: true }, (err, userUpdated) => {
//     if (err) {
//       res.send({ message: `Error del servidor: ${err}` });
//     } else if (!userUpdated) {
//       res.send({ message: "Usuario no encontrado" });
//     } else {
//       res.status(200).send({
//         message: "Usuario actualizado con exito",
//         user: userUpdated,
//       });
//     }
//   });
// }

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
  //   userLogin,
};
