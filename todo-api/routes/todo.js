const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const winston = require('winston');
const todoModel = require('../models/todo.model');

/* Logger Configuration */
const logConfiguration = {
  'transports' : [
    new winston.transports.File({
      filename : './logs/todoLogs.log'
    })]
  }

const logger = winston.createLogger(logConfiguration);


/* GET todo listing. */
router.get('/list', function (req, res, next) {
  
  logger.info("Method : " + req.method + ", Path : " + req.path);

  todoModel.find((err, todoListResponse) => {
    if (err) {
      logger.error(err);
      res.send({ status: 500, message: 'Unable to find todo task' });
    }
    else {
      const recordCount = todoListResponse.length;
      logger.info({ status: 200, recordCount: recordCount });
      res.send({ status: 200, recordCount: recordCount, results: todoListResponse });
    }
  });
});

/* Get In Progress Todos*/
router.get('/inProgress', function (req, res, next) {
  
  logger.info("Method : " + req.method + ", Path : " + req.path);

  todoModel.find({status: "In Progress"},(err, todoListResponse) => {
    if (err) {
      logger.error(err);
      res.send({ status: 500, message: 'Unable to find In Progress todo task' });
    }
    else {
      const recordCount = todoListResponse.length;
      logger.info({ status: 200, recordCount: recordCount });
      res.send({ status: 200, recordCount: recordCount, results: todoListResponse });
    }
  });
});

/* Get Completed Todos*/
router.get('/completed', function (req, res, next) {
  
  logger.info("Method : " + req.method + ", Path : " + req.path);

  todoModel.find({status: "Completed"},(err, todoListResponse) => {
    if (err) {
      logger.error(err);
      res.send({ status: 500, message: 'Unable to find Completed todo task' });
    }
    else {
      const recordCount = todoListResponse.length;
      logger.info({ status: 200, recordCount: recordCount });
      res.send({ status: 200, recordCount: recordCount, results: todoListResponse });
    }
  });
});


/* create new todo task*/
router.post('/add', function (req, res, next) {

  logger.info("Method : " + req.method + ", Path : " + req.path);

  const name = req.body.name;
  const description = req.body.description;
  const time = req.body.time;
  const status = req.body.status;

  let todoObj = new todoModel({
    name: name,
    description: description,
    time: time,
    status: status
  });

  todoObj.save((err, todoObj) => {

    if (err) {
      logger.error(err);
      res.send({ status: 500, message: 'Unable to add todo task' });
    }
    else {
      logger.info({ status: 200, todoDetails: todoObj});
      res.send({ status: 200, message: 'todo task added successfully', todoDetails: todoObj });
    }
  });

});

module.exports = router;
