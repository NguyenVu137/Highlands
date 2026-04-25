import db from '../models/index'
import CRUDService from '../services/CRUDService'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('home.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let handleCreateNewUser = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    console.log("check email: ", JSON.stringify(email));
    console.log("check req: ", req.body)
    return res.send("handleCreateNewUser")
}

let postUser = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    return res.send('post crud from server')
}

let getUser = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('getUser.ejs', {
        data: data
    })
}

let editUser = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserById(userId);
        return res.render('editUser.ejs', {
            user: userData
        })
    } else {
        return res.send("User not found!")
    }

}

let putUser = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('getUser.ejs', {
        data: allUsers
    });
}

let deleteUser = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUser(id);
        return res.send("Delete user success");
    } else {
        return res.send("User not found")
    }

}

module.exports = {
    getHomePage,
    handleCreateNewUser,
    getCRUD,
    postUser,
    getUser,
    editUser,
    putUser,
    deleteUser
}