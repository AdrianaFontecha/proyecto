const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken.js");

module.exports = (app) => {
  app.get("/api/users", verifyToken, userController.getAllUsers);
  app.get("/api/users/:id", verifyToken, userController.getUserById);
  app.post("/api/users/create", userController.register);
  app.put("/api/users/update", userController.getUserUpdate);
  app.delete("/api/users/delete/:id", verifyToken, userController.getUserDelete);
  app.post("/api/users/login", userController.login);
};

