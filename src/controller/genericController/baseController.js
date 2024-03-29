const baseController = (service) => {

    const create = async (req, res, next) => {
        try {
            let { currentUser, ...request } = req.body;
            let result = await service.create(request);
            res.send(result);
        } catch (error) {
            next(error);
        }
    };

    const deleteById = async (req, res, next) => {
        try {
            let request = req.body;
            let result = await service.deleteById(request.id);
            res.send(result);
        } catch (error) {
            next(error);
        }
    };

    const getAll = async (req, res, next) => {
        try {
            let result = await service.getAll();
            res.send(result);
        } catch (error) {
            next(error);
        }
    };

    const getById = async (req, res, next) => {
        try {
            let request = req.body;
            let result = await service.getById(request.id);
            res.send(result);
        } catch (error) {
            next(error);
        }
    };

    const getByObject = async (req, res, next) => {
        try {
            let request = req.body;
            let result = await service.getByObject(request.id);
            res.send(result);
        } catch (error) {
            next(error);
        }
    };

    const update = async (req, res, next) => {
        try {
            let { currentUser, ...request } = req.body;
            let result = await service.update(request);
            res.send(result);
        } catch (error) {
            next(error);
        }
    };

    return {
        create,
        deleteById,
        getAll,
        getById,
        getByObject,
        update
    };
};

module.exports.baseController = baseController;