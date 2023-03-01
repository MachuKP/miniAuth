// use handler instead of try catch for async function
const asyncHandler = require('express-async-handler')

// @desc   get user
// @route  GET api/user
// @access Plubic
const getUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "get user" })
})

// @desc   create user
// @route  POST api/user
// @access Plubic
const createUser = asyncHandler(async(req, res) => {
    if (!req.body.email) {
        res.status(400)
        throw new Error("Missing parameter email")
    }
    if (!req.body.password) {
        res.status(400)
        throw new Error("Missing parameter password")
    }
    if (!req.body.username) {
        res.status(400)
        throw new Error("Missing parameter username")
    }
    console.log(req.body.email, req.body.password, req.body.username)
    res.status(200).json({ message: "success" })
})

// @desc   edit user
// @route  PUT api/user
// @access Private
const editUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "put user " + req.params.id })
})

// @desc   delete user
// @route  DELETE api/user
// @access Private
const deleteUser = asyncHandler(async(req, res) => {
    res.status(200).json({ message: "delete user " + req.params.id })
})

module.exports = {
    getUser,
    createUser,
    editUser,
    deleteUser
}