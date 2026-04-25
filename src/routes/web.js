import express from "express";
import homeController from '../controller/homeController';

const router = express.Router();

/**
 * 
 * @param {*} app - express app 
 */

const initWebRoutes = (app) => {
    //path, handler
    router.get("/", homeController.getHomePage);
    router.post("/user/create-user", homeController.handleCreateNewUser);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-user', homeController.postUser);
    router.get('/get-user', homeController.getUser);
    router.get('/edit-user', homeController.editUser);
    router.post('/put-user', homeController.putUser)
    router.get('/delete-user', homeController.deleteUser);

    return app.use("/", router);
}

module.exports = initWebRoutes;