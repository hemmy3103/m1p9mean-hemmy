class Generic {
    checkContent = (req, res, modeleName, content) => {
        // Validate request
        if (!req.body[content]) {
            return res.status(400).send({
                message: `${modeleName} ${content} can not be empty`,
            });
        }
    };

    save = (model, res, req) => {
        const obj = new model(req.body);
        this.errorHandling(obj.save(), res);
    };

    findAll = (model, res) => {
        this.errorHandling(model.find(), res);
    };

    findById = (model, res, id) => {
        this.errorHandlingLevelUp(model.findById(id), res, id, model);
    };

    findByIdAndUpdate = (model, res, id, req) => {
        this.errorHandlingLevelUp(
            model.findByIdAndUpdate(id, req.body, { new: true }),
            res,
            id,
            model
        );
    };

    findByIdAndRemove = (model, res, id) => {
        this.errorHandlingLevelUp(model.findByIdAndRemove(id), res, id, model);
    };

    errorHandling = (callback, res) => {
        callback
            .then((data) => {
                res.send({
                    status: 200,
                    message: 'Success',
                    data: data,
                });
            })
            .catch((err) => {
                res.status(500).send({
                    status: 500,
                    message: err.message
                });
            });
    };

    errorHandlingLevelUp = (callback, res, id, model) => {
        callback
            .then((message) => {
                if (!message) {
                    return res.status(500).send({
                        status: 500,
                        message: model.modelName + " not found with id " + id,
                    });
                }
                res.send(message);
            })
            .catch((err) => {
                if (err.kind === "ObjectId") {
                    return res.status(404).send({
                        status: 500,
                        message: model.modelName + " not found with id " + id,
                    });
                }
                return res.status(500).send({
                    status: 500,
                    message: "Error retrieving message with id " + id,
                });
            });
    };
}
exports.gen = new Generic();
