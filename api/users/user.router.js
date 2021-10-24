const { 
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    login
} = require("./user.controller");
const router = require("express").Router();
const { checkToken} = require("../../auth/token_validation")
router.post("/",createUser);
router.get("/", getUsers);
router.patch("/", updateUser);
router.delete("/", deleteUser);
router.post("/login",login);
module.exports = router;