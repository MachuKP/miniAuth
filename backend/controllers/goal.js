// use handler instead of try catch for async function because mongo return promise
const asyncHandler = require("express-async-handler");
const moment = require("moment");
const mongoose = require("mongoose");

const Goal = require("../models/goal");
const DailyLog = require("../models/dailyLog");

// @desc   get dailylog
// @route  GET api/goal
// @access Private
const getDailyLog = asyncHandler(async (req, res) => {
  let endOfYesterday = moment().subtract(1, "days").endOf("day").toISOString();

  // don't generate new log
  const existedTodayLog = await DailyLog.find({
    user: req.user.id,
    createdAt: {
      $gte: endOfYesterday,
    },
  });

  let dailyLog;

  if (existedTodayLog.length > 0) {
    dailyLog = existedTodayLog;
  } else {
    // generate new log
    const goal = await Goal.find({ user: req.user.id });
    let LogItems = [];
    console.log(goal, "generate new log");
    if (goal && goal.length > 0) {
      for (let i = 0; i < goal.length; i++) {
        if (goal[i].repeat[moment().weekday()] == "1") {
          let goalItem = {
            text: goal[i].text,
            status: goal[i].status,
          };
          LogItems.push(goalItem);
        }
      }
    }
    const createTodayLog = await DailyLog.create({
      items: LogItems,
      user: req.user.id,
    });
    dailyLog = createTodayLog;
  }

  res.status(200).json({
    dailyLog,
  });
});

// @desc   get dailylog
// @route  GET api/goal
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  const { text, repeat } = req.body;

  let endOfYesterday = moment().subtract(1, "days").endOf("day").toISOString();

  const existedTodayLog = await DailyLog.find({
    user: req.user.id,
    createdAt: {
      $gte: endOfYesterday,
    },
  });

  // check repeat parameter
  const validateData = repeat.match(/^[01]*$/);
  const validateLength = repeat.length == 7 && true;
  if (validateData && validateLength) {
    const newGoal = await Goal.create({
      text,
      repeat,
      user: req.user.id,
    });

    if (newGoal) {
      if (existedTodayLog) {
        let newItem = [...existedTodayLog[0].items];
        if (newGoal.repeat[moment().weekday()] == "1") {
          newItem.push({
            text: newGoal.text,
            status: newGoal.status,
            _id: new mongoose.Types.ObjectId(newGoal.id)
          });
        }
        await DailyLog.findByIdAndUpdate(existedTodayLog[0].id, {
          items: newItem,
        });
      }

      res.status(200).json({
        _id: newGoal.id,
        text: newGoal.text,
        status: newGoal.status,
        repeat: newGoal.repeat,
      });
    } else {
      res.status(400);
      throw new Error("Invalide Goal");
    }
  } else {
    res.status(400);
    throw new Error("Invalide repeat parameter");
  }
});

module.exports = {
  getDailyLog,
  createGoal,
};
