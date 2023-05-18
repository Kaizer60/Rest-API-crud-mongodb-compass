const express = require('express')
const router = express.Router()

//call middlewars
const { validateDbId, raiseRecord404Error } = require('../middlewares')

const Employee = require('../models/employee.model.js')

//call services
const { generateCrudMethods } = require('../services')
const employeeCrud = generateCrudMethods(Employee)

/*--------------------------------------------------------------------*/

//Read all
router.get('/', async (req, res, next) => {
    Employee.find()
    // employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

/*--------------------------------------------------------------------*/

//Raed by id
router.get('/:id', validateDbId, async (req, res, next) => {
    Employee.findById(req.params.id)
    // employeeCrud.getByid(req.params.id)
        .then(data => {
            if(data){
                res.send(data)
            }else{
                raiseRecord404Error(req, res)
            }
        })
        .catch(err => next(err))
})

/*--------------------------------------------------------------------*/

//Create
router.post('/', async (req, res, next) => {
    Employee.create(req.body)
    // employeeCrud.create(req.body)
        .then(data => {
            if(data){
                res.res.status(201).json(data)
            }else{
                raiseRecord404Error(req, res)
            }
        })
        .catch(err => next(err))
})

/*--------------------------------------------------------------------*/

//Update
router.put('/:id', validateDbId, async (req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, req.body)
    // employeeCrud.update(req.params.id, req.body)
        .then(data => {
            if(data){
                res.send(data)
            }else{
                raiseRecord404Error(req, res)
            }
        })
        .catch(err => next(err))
})

/*--------------------------------------------------------------------*/

//Delete
router.delete('/:id', validateDbId, async (req, res, next) => {
    Employee.findByIdAndDelete(req.params.id)
    // employeeCrud.delete(req.params.id)
        .then(data => {
            if(data){
                res.send(data)
            }else{
                raiseRecord404Error(req, res)
            }
        })
        .catch(err => next(err))
})

/*--------------------------------------------------------------------*/

module.exports = router
