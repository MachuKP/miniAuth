// use handler instead of try catch for async function because mongo return promise
const asyncHandler = require('express-async-handler')
const User = require('../models/user')

// @desc   get user
// @route  GET api/user
// @access Plubic
const getUser = asyncHandler(async(req, res) => {
    const userData = await User.find()
    res.status(200).json(userData)
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
    
    const createUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    })

    res.status(200).json(createUser)
})

// @desc   edit user
// @route  PUT api/user
// @access Private
const editUser = asyncHandler(async(req, res) => {
    const existUser = await User.findById(req.params.id)

    if (!existUser) {
        res.status(400)
        throw new Error("User isn't existed")
    }

    const updateUser = await User.findByIdAndUpdate(req.params.id, { username: req.body.username })

    res.status(200).json(updateUser)
})

// @desc   delete user
// @route  DELETE api/user
// @access Private
const deleteUser = asyncHandler(async(req, res) => {
    const existedUser = await User.findByIdAndRemove(req.params.id)

    if (!existedUser) {
        res.status(400)
        throw new Error("User isn't existed")
    }

    res.status(200).json(req.params.id)
})

module.exports = {
    getUser,
    createUser,
    editUser,
    deleteUser
}