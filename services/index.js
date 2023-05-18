exports.generateCrudMethods = Model => {
    return {
        getall: () => Model.find(),
        getByid: id => Model.findById(id),
        create: recode => Model.create(recode),
        update: (id, recode) => Model.findByIdAndUpdate(id, recode, { new: true}),
        delete: id => Model.findByIdAndDelete(id)
    }
}

// module.exports = generateCrudMethods