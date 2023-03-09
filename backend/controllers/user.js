// use handler instead of try catch for async function because mongo return promise
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

// @desc   get user
// @route  GET api/user
// @access Plubic
const getUser = asyncHandler(async(req, res) => {
    const { _id, username, email } = await User.findById(req.user.id)
    res.status(200).json({
        _id,
        username,
        email
    })
})

// @desc   create user
// @route  POST api/user
// @access Plubic
const createUser = asyncHandler(async(req, res) => {
    const { email, password, username } = req.body
    if (!email || !password || !username) {
        res.status(400)
        throw new Error("Please fill all field")
    }

    // const existedUser = await User.findOne({ email: email })
    // short hand when parameter has the same name
    const existedUser = await User.findOne({ email })

    if (existedUser) {
        res.status(400)
        throw new Error("User is already existed")
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)
    
    const createUser = await User.create({
        email,
        username,
        password: hashPassword,
    })

    if (createUser) {
        res.status(201).json({
            _id: createUser.id,
            username: createUser.username,
            email: createUser.email,
            token: genarateToken(createUser.id)
        })
    } else {
        res.status(400).json("User is invalided")
    }
})

// @desc   create user
// @route  POST api/user/login
// @access Plubic
const login = asyncHandler(async(req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("Please fill all field")
    }

    const existedUser = await User.findOne({ email })

    const matchedPassword = await bcrypt.compare(password, existedUser.password);

    if (existedUser && matchedPassword) {
        res.status(201).json({
            _id: existedUser.id,
            username: existedUser.username,
            email: existedUser.email,
            token: genarateToken(existedUser._id)
        })
    } else {
        res.status(400)
        throw new Error("Email or Password aren't existed or matched")
    }
})

const genarateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECERT, {
        expiresIn: '30d'
    })
}

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
    login,
    createUser,
    editUser,
    deleteUser
}